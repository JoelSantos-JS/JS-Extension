import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useLoading } from "./LoadingContext";

interface AuthCtxData {
    user: IUser | null;
    register: (credentials: SignCredentials) => Promise<void>
    login: (credentails: LoginCredentials) => Promise<void>
    logout: () => Promise<void>
}

interface AuthCtxProps {
     children: ReactNode
}
interface IUser {
    email?: string
    id: string
}

interface SignCredentials {
    email: string;
    password: string;
}

interface LoginCredentials {
    email: string;
    password: string;
}

const AuthContext = createContext({} as AuthCtxData)



export function AuthProvider({children}: AuthCtxProps) {
    const {toggleLoading} = useLoading()
    const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()



    async function logout() {
        try {
            toggleLoading(true)
            await signOut(auth)
            setUser(null)
            navigate('/login')
        } catch (error) {
                console.log(error)
        }finally {
            toggleLoading(false)
        }
    }
  
    async function register({email, password}: SignCredentials) {
        try {
            toggleLoading(true)
            const {user} =  await createUserWithEmailAndPassword(auth, email , password)
            setUser({
                email: user.email ?? "",
                id: user.uid


            })

           navigate('/')
        }catch (err) {
            console.log(err)
        } finally {
            toggleLoading(false)
        }
    }

    async function login({email , password}:LoginCredentials ) {
        try {
            toggleLoading(true)
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            setUser({
                email: user.email ?? "",
                id: user.uid


            })
            navigate('/')
        } catch (error) {
                console.log(error)
        }finally {
            toggleLoading(false)
        }

    }

    useEffect(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            if(firebaseUser) {
                setUser({
                    email: String(firebaseUser.email),
                    id: firebaseUser.uid
                })
            }else {
                navigate('/login')
            }

            toggleLoading(false)
        })
    } , [])


    return (
        <AuthContext.Provider value={{user , register, login , logout}}>


            {children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}