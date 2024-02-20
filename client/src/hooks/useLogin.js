import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "./useAuthContext"

const useLogin = () => {

    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const handleLogin = async ({ username, password }) => {

        const success = handleInputErrors({ username, password })

        if (!success) return

        setLoading(true)

        try {
            const res = await fetch("https://wechat-jxju.onrender.com//api/v1/auth/sign_in", {
                credentials: "include",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()

            if (data.error) throw new Error(data.error)

            toast.success(`Welcome! ${data.username} `)
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, handleLogin }
}

export default useLogin

//** Function for checking error for client side */
function handleInputErrors({ username, password }) {

    if (!username || !password) {
        toast.error("Please fill all the field")
        return false
    }

    return true

}