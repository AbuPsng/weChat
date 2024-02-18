import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignUp from "../../components/hooks/useSignUp"

const SignUpPage = () => {

    const { loading, handleSignUp } = useSignUp()

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })

    const handleCheckBoxChange = (gender) => {
        setInputs(prev => ({ ...prev, gender }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleSignUp(inputs)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center mb-4 text-gray-300">
                    Login
                    <span className="text-blue-500">weChat</span>
                </h1>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" value={inputs.fullName} onChange={(e) => setInputs((prev) => ({ ...prev, fullName: e.target.value }))} placeholder="Enter Full Name" className="w-full input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" value={inputs.username} onChange={(e) => setInputs((prev) => ({ ...prev, username: e.target.value }))} placeholder="Enter username" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" value={inputs.password} onChange={(e) => setInputs((prev) => ({ ...prev, password: e.target.value }))} placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" value={inputs.confirmPassword} onChange={(e) => setInputs((prev) => ({ ...prev, confirmPassword: e.target.value }))} placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>

                    <GenderCheckBox onCheckBoxChanges={handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to='/sign_in' className="text-sm my-2 hover:underline hover:text-blue-600 font-semibold inline-block" >
                        Already have an account?
                    </Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 " disabled={loading}>
                            {
                                loading ?
                                    <span className="loading loading-spinner"></span>
                                    :
                                    "Sign Up"
                            }
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default SignUpPage
