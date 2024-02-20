import { useEffect, useRef } from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import Message from './Message'
import useListenMessage from '../../hooks/useListenMessage'

const Messages = () => {

    const { loading, messages } = useGetMessages()

    useListenMessage()

    const lastMessageRef = useRef()

    console.log(messages)

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }, [messages])

    return (
        <div className='px-4 flex-1 overflow-auto'>

            {
                loading && [...Array(4)].map((_, idx) => (<MessageSkeleton key={idx} dat={_} />))
            }

            {
                !loading && messages.length === 0 && (
                    <p className="text-center">Send a message to start the conversation</p>
                )
            }

            {
                !loading && messages.length !== 0 && (messages.map(message => (<div key={message._id} ref={lastMessageRef}>< Message message={message} /></div>)))
            }
        </div>
    )
}

export default Messages
