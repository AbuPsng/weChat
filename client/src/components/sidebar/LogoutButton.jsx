import { CiLogout } from "react-icons/ci";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {

    const { loading, handleLogout } = useLogout()

    return (
        <div className="my-3 pt-1">
            {
                !loading ? (<CiLogout onClick={handleLogout} className="w-6 h-6 text-white cursor-pointer" />)
                    :
                    (<span className="loading loading-spinner"></span>)
            }
        </div>
    )
}

export default LogoutButton
