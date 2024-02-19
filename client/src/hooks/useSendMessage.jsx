import { useState } from "react"
import toast from "react-hot-toast"
import useConversation from "../zustand/useConversation"

const useSendMessage = () => {

    const [loading, setLoading] = useState()
    const { messages, setMessages, selectedConversation } = useConversation()

    const handleSendMessage = async (message) => {
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/v1/messages/send/${selectedConversation._id}`, {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message })
            })

            const data = await res.json()

            if (data.error) throw new Error(data.error)

            setMessages([...messages, data])

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, handleSendMessage }

}

export default useSendMessage
