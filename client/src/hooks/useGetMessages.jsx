import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    const handleGetMessages = async () => {
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/v1/messages/${selectedConversation._id}`, {
                credentials: "include"
            })

            const data = await res.json()

            if (data.error) throw new Error(data.error)

            setMessages(data)
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (selectedConversation?._id) handleGetMessages()
    }, [selectedConversation?._id, setMessages])

    return { messages, loading }
}

export default useGetMessages
