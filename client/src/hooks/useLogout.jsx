import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import toast from 'react-hot-toast'

const useLogout = () => {

    const { setAuthUser } = useAuthContext()

    const [loading, setLoading] = useState(false)

    const handleLogout = async () => {
        setLoading(true)
        try {
            await fetch("https://wechat-jxju.onrender.com//api/v1/auth/sign_out", {
                credentials: "include"
            })

            setAuthUser({})

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    return { loading, handleLogout }
}

export default useLogout
