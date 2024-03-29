import { useAuthContext } from "../../hooks/useAuthContext"
import { useSocketContext } from "../../hooks/useSocketContext"
import useConversation from "../../zustand/useConversation"

const Contact = ({ conversation, emoji, lastIndex }) => {

    const { selectedConversation, setSelectedConversation } = useConversation()

    const isSelected = selectedConversation?._id === conversation._id

    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <div onClick={() => setSelectedConversation(conversation)} className={`flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer  ${isSelected && "bg-sky-500"}`} >

            <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="w-12 rounded-full">
                    <img src={conversation.profilePicture} alt="User Avatar" />

                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-200">{conversation.username}</p>
                    <span className="text-xl">{emoji}</span>
                </div>

                {
                    !lastIndex && <div className="divider my-0 py-0 h-1"></div>
                }


            </div>

        </div >
    )
}

export default Contact
