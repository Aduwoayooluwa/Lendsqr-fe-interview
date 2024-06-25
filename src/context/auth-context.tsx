import { useNavigate } from "@tanstack/react-router"
import { Dispatch, SetStateAction, createContext, useState, useEffect } from "react"
import { getValFromLocalStorage } from "../helper/storage"

type userDataProps = {
    email: string
    password: string
}
type AuthContextProps = {
    isUserLoggedIn: boolean
    userData: {
        email: string,
        password: string
    } | null
    setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>
    setUserData: Dispatch<SetStateAction<userDataProps | null>>

}

export const AuthContext = createContext<AuthContextProps>({
    isUserLoggedIn: false,
    userData: null,  
    setIsUserLoggedIn: () => {},
    setUserData: () => {}
});


export default function AuthProvider({ children}: Readonly<{
    children: React.ReactNode
}>) {

    const navigate = useNavigate();

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(getValFromLocalStorage("isUserLoggedIn") || false);
    const [userData, setUserData] = useState<userDataProps | null>(getValFromLocalStorage("userData") || null)



    useEffect(() => {
        if (isUserLoggedIn === false || userData === null) {
            navigate({
                to: "/"
            }) 
           
        }
    }, [isUserLoggedIn, userData, navigate]
    )
    return (
        <AuthContext.Provider value={{
            isUserLoggedIn,
            setIsUserLoggedIn,
            userData,
            setUserData
        }}>
            { children}
        </AuthContext.Provider>
            
    )
}