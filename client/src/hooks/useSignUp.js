import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from './useAuthContext'

const useSignUp = () => {

    const [loading, setLoading] = useState(false)

    const { setAuthUser } = useAuthContext()

    const handleSignUp = async (inputs) => {

        const { fullName, username, password, confirmPassword, gender } = inputs

        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })

        if (!success) return

        setLoading(true)
        try {

            const res = await fetch("https://wechat-jxju.onrender.com/api/v1/auth/sign_up", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })

            const data = await res.json()

            if (data.error) throw new Error(data.error)

            toast.success("Account created successfully")
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    return { loading, handleSignUp }

}

export default useSignUp


//** Function for checking error for client side */
function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {

    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill all the field")
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Password do not match")
        return false
    }

    if (password.length < 6) {
        toast.error("Password should be at least contain 6 letter")
        return false
    }

    return true

}