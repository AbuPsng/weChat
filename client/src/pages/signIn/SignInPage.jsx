import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"


const SignInPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { loading, handleLogin } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ username, password })
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold mb-4 text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> weChat</span>
                </h1>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>

                    <Link to="/sign_up" className="text-sm my-2 hover:underline font-semibold hover:text-blue-600 mt-2 inline-block" >
                        {"Don 't"} have an account?
                    </Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 " disabled={loading}>
                            {
                                loading ?
                                    <span className="loading loading-spinner"></span>
                                    :
                                    "Sign In"
                            }
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default SignInPage
