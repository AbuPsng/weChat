import { userModel } from "../models/userModel.js"

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id

        const allUsersExceptUser = await userModel.find({ _id: { $ne: loggedInUser } }).select("username _id profilePicture gender")

        res.status(200).json({ allUser: allUsersExceptUser })
    } catch (error) {
        console.log("error in getUserForSideBar controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}