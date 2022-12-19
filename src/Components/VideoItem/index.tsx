import React from 'react'
import { Button, Container, Details, Thumb } from './style'
import {BsFillPlayFill} from 'react-icons/bs' 
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaTrashAlt} from 'react-icons/fa'
import {RiAddCircleLine} from 'react-icons/ri'
import { useList } from '../../Context/ListContext'

interface VideoProps {
    addMode? : boolean
    data: Ivideo
}

export interface Ivideo {
    docId?:string;
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    durationMs: number
}





export function VideoItem({ data, addMode} : VideoProps) {
    const {createListItem  , deleteList, list} = useList()

    async function addCurrentVideo() {
        await createListItem(data)
    }


    function openVideo() {
        chrome.tabs.create({
            url:`https://www.youtube.com/watch?v=${data.id}`
        })
    }
    const alreadyExist = list.some( video => video.id === data.id)

 async function handleDelete() {
    if(!data.docId) return
    await deleteList(data.id)
 }

  return (
    <Container>

        <Thumb imgUrl={data.thumbnail}/>

        <Details>
            <strong title={data.title}>{data.title}</strong>
            <div>
                 <div>
                    {addMode ? ( <Button onClick={addCurrentVideo} disabled={alreadyExist}>
                        <RiAddCircleLine/>
                        Adicionar a Lista</Button>
                       
                        
                        ): (
                            <>
                             <Button  onClick={openVideo}>
                        <BsFillPlayFill/>
                        Play Now</Button>
                        <FaTrashAlt size={12} onClick={handleDelete}/>  
                            </>
                        ) }
                     
                    </div>  
                     
                    <span>
                            <AiOutlineClockCircle/>
                        {data.duration}</span>
            </div>
        </Details>
    </Container>
  )
}

