import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const [conversation, setConversation] = useState([])

    const getConversation = async () => {
        setLoading(true)
        try {
            const res = await fetch("http://localhost:5000/api/v1/users", {
                credentials: "include"
            })
            const data = await res.json()

            if (data.error) throw new Error(data.error)
            setConversation(data.allUser)
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        getConversation()
    }, [])

    return { loading, conversation }

}

export default useGetConversation
