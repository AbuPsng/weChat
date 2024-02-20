import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState({})

    const handleGetUserData = async () => {
        try {
            const res = await fetch("https://wechat-jxju.onrender.com/api/v1/auth/is_sign_in", {
                credentials: "include",
            })
            const data = await res.json()
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }


    useEffect(() => {
        handleGetUserData()
    }, [])

    return <AuthContext.Provider value={{ authUser, setAuthUser }}>
        {children}
    </AuthContext.Provider>
}

