import { userModel } from "../models/userModel.js"
import { checkPassword, generateToken, hashPassword } from "../utils/utils.js"

export const signUp = async (req, res) => {
    try {

        const { fullName, username, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords dose not match" })
        }

        const user = await userModel.findOne({ username })

        if (user) {
            return res.status(400).json({ error: "Username already exist" })
        }

        //** Hashing the password */

        const hashedPassword = await hashPassword(password)

        const boyProfilePic = `https://avatar/iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar/iran.liara.run/public/girl?username=${username}`

        const newUser = await userModel.create({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (!newUser) {
            return res.status(400).json({ error: "Invalid user data" })
        }

        generateToken(newUser._id.toString(), res)

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePicture: newUser.profilePicture
        })

    } catch (error) {
        console.log("error in singUp controller", error.message)
        res.status(500).json({ error: error.message })
    }
}

export const signIn = async (req, res) => {
    try {

        const { username, password } = req.body

        if (!username) return res.status(400).json({ error: "Please provide a username/password" })

        if (!password) return res.status(400).json({ error: "Please provide a username/password" })

        const user = await userModel.findOne({ username })

        if (!user) return res.status(400).json({ error: "No user found" })

        const isPasswordCorrect = await checkPassword(password, user.password)

        if (!isPasswordCorrect) return res.status(400).json({ error: "Wrong password" })

        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePicture: user.profilePicture
        })
    } catch (error) {
        console.log("error in singUp controller", error.message)
        res.status(500).json({ error: error.message })
    }

}

export const signOut = async (req, res) => {
    try {
        res.cookie("weChat-token", "", {
            maxAge: 0
        })

        res.status(200).json({ message: "Logged Out successfully" })
    } catch (error) {
        console.log("error in singUp controller", error.message)
        res.status(500).json({ error: error.message })
    }
}

