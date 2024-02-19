import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import NoChatSelected from "./NoChatSelected"
import { useEffect } from "react"

const MessageContainer = () => {

    const { selectedConversation, setSelectedConversation } = useConversation()

    useEffect(() => {
        //Cleanup function (unmounts)
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {
                !selectedConversation ? (
                    <NoChatSelected />
                ) :
                    (
                        <>
                            <div className="bg-slate-500 px-4 py-2 mb-2">
                                <span className="label-text">
                                    To:
                                </span>
                                <span className="text-gray-900 font-bold">
                                    {selectedConversation.username}
                                </span>
                            </div>
                            <Messages />
                            <MessageInput />
                        </>
                    )
            }


        </div>
    )
}

export default MessageContainer
