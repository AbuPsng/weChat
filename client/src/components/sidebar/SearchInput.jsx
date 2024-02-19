import { useState } from "react"
import { IoSearchSharp } from "react-icons/io5"
import useConversation from "../../zustand/useConversation"
import useGetConversation from "../../hooks/useGetConversation"
import toast from "react-hot-toast"

const SearchInput = () => {

    const [search, setSearch] = useState("")
    const { setSelectedConversation } = useConversation()
    const { conversation } = useGetConversation()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return toast.error("Please input a name")

        const contact = conversation.find(cont => (cont.username.toLowerCase().includes(search.toLowerCase())))

        if (contact) {
            setSelectedConversation(contact)
            setSearch("")
        } else {
            toast.error("No user found")
        }
    }



    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input type="text" placeholder="Search.." value={search} onChange={(e) => setSearch(e.target.value)} className="input input-bordered rounded-full" />
            <button className="btn btn-circle bg-sky-500 text-white" type="submit">
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput
