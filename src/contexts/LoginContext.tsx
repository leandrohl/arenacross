import { createContext, ReactNode, useState } from "react";
import LoginModal from "../components/LoginModal";

interface LoginContextData {
    isLoginModalOpen: boolean
    isLoginSuccessed:  boolean
    openLoginModal: () => void
    closeLoginModal: () => void
    loginSuccessed: () => void
}

interface LoginContextProps{
    children: ReactNode
}

export const LoginContext = createContext({} as LoginContextData) 

export function LoginProvider({children}: LoginContextProps){

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isLoginSuccessed, setIsLoginSuccessed] = useState(false);

    function openLoginModal(){
        setIsLoginModalOpen(true);
    }

    function closeLoginModal(){
        setIsLoginModalOpen(false)
    }

    function loginSuccessed(){
        setIsLoginSuccessed(true)

        setTimeout(function(){
            setIsLoginSuccessed(false)
            setIsLoginModalOpen(false)
        }, 3000)
    }

    return(
        <LoginContext.Provider value={{ 
            isLoginModalOpen,
            openLoginModal,
            closeLoginModal,
            isLoginSuccessed,
            loginSuccessed
        }}>
            {children}
            { isLoginModalOpen && <LoginModal/>}
        </LoginContext.Provider>
    )
}