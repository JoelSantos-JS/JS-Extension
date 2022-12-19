import { async } from "@firebase/util";
import axios from "axios";
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Ivideo } from "../Components/VideoItem";
import { formatYTDuration } from "../utils/formatYTDuration";
import { useLoading } from "./LoadingContext";
import {addDoc, collection, CollectionReference, deleteDoc, doc, getDocs, query, where} from 'firebase/firestore'
import { db } from "../config/firebase";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

interface ListCtxData {
    currentVideo: Ivideo
    list:Ivideo[]
    totalTime: number
    createListItem: (videoData: Ivideo) => Promise<void>
    deleteList: (itemId: string) => Promise<void>
}

interface ListCtxProps {
     children: ReactNode
}


const ListContext = createContext({} as ListCtxData)



export function ListProvider({children}: ListCtxProps) {
    const {toggleLoading, isLoading} =useLoading()

    const {user} = useAuth()

    const [list ,setList] = useState<Ivideo[]>([])
    const [currentVideo, setCurrentVideo] = useState({} as Ivideo)

    const ref = collection( db, "videos") as CollectionReference<Ivideo>


    async function createListItem(videoData: Ivideo) {
        if(isLoading) return;
        try {   
            toggleLoading(true)

            const data = {
                ...videoData,
                userId: user?.id
            }

            const response = await addDoc(ref, data)
            setList(old => [...old, {
                ...data,
                docId: response.id
            }] )

            toast.success("Video successfully added to the list!");
            
        } catch (error) {
                console.log(error)
                toast.error("An unexpected error occurred while adding to the list");
        } finally {
            toggleLoading(false)
        }
    }


    async function deleteList(itemId: string) {
        if(isLoading) return;
        try {
          toggleLoading(true);
          const itemDoc = doc(db, "videos", itemId);
          await deleteDoc(itemDoc);
    
          setList(old => old.filter(video => video.docId !== itemId));
          toast.success("Video successfully deleted!");
        } catch (err) {
          toast.error("An unexpected error occurred");
        } finally {
          toggleLoading(false);
        }
    }


    const getUserList = useCallback(async () => {
        if(!user?.id) return 

        try {

            toggleLoading(true)

            const useQuery = query(ref , where('userId' , "==", user.id))
            const data = await getDocs(useQuery)
            const formatedData = data.docs.map((doc ) => ({...doc.data() , docId: doc.id}) )
            setList(formatedData)
            
        } catch (error) {
            toast.error("An unexpected error occurred while getting your list");
            
        }finally {
            toggleLoading(false)
        }
    }, [user])

    useEffect(() => {getUserList() } , [user])

    const youtubeLink = 'youtube.com/watch'
    const apikey = import.meta.env.VITE_YOUTUBE_API_KEY


    async function getCurrentVideo(url: string) {
        const { data } = await axios.get(url)
        const video = data.items[0]
        const duration = formatYTDuration(video.contentDetails.duration)
        setCurrentVideo({
            id: video.id,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.default.url,
            duration: duration.formatted,
            durationMs: duration.ms
          })
    }

    useEffect(() => {

        if(chrome?.tabs?.query) {
            chrome.tabs.query({currentWindow: true, active: true} , (tabs ) => {
                const newUrl = tabs[0].url;
                if( newUrl && newUrl.includes(youtubeLink)) {
                    const videoID = newUrl.replace('https://www.youtube.com/watch?v=' , "")
                    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${apikey}&part=snippet,statistics,contentDetails`
                    getCurrentVideo(apiUrl)
                }
            })
        }

    } , [chrome.tabs])


    const totalTime = useMemo(() => {
        return list.reduce((acc , video) => {
            return acc += video.durationMs
        },0)
    }, [list])

    return (
        <ListContext.Provider value={{ list ,createListItem , currentVideo,totalTime, deleteList}}>


            {children}
        </ListContext.Provider>
    )

}

export function useList() {
    const context = useContext(ListContext)

    return context
}