import { TiMessage } from "react-icons/ti"
import { useAuthContext } from "../../hooks/useAuthContext"

const NoChatSelected = () => {

    const { authUser } = useAuthContext()

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {authUser.username}</p>
                <p>Select a friend to start chat</p>
                <TiMessage className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

export default NoChatSelected
