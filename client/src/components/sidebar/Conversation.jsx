import useGetConversation from "../../hooks/useGetConversation"
import { getRandomEmoji } from "../../utils/emoji"
import Contact from "./Contact"

const Conversation = () => {

    const { loading, conversation } = useGetConversation()

    return (
        <div className="py-2 flex flex-col overflow-auto">

            {
                conversation.map((con, index) => (
                    <Contact
                        key={con._id}
                        conversation={con}
                        emoji={getRandomEmoji()}
                        lastIndex={index === conversation.length - 1}
                    />
                ))
            }

            {
                loading ? <span className="loading loading-spinner mx-auto"></span> : null
            }
        </div>
    )
}

export default Conversation
