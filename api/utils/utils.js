import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { userModel } from "../models/userModel.js";

export const hashPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt);
    return hashedPassword
}

export const checkPassword = async (password, encryptedPassword) => {
    const correctPassword = await bcryptjs.compare(password, encryptedPassword)
    return correctPassword
}

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_TOKEN, { expiresIn: "2d" })

    if (!token) return res.status(400).json({ error: "Failed to generate JWT token" })

    res.cookie("weChat-token", token, {
        // maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV !== "development"
    })
}

export const isLogin = async (req, res, next) => {
    try {
        const token = req.cookies["weChat-token"]

        if (!token) return res.status(401).json({ error: "Unauthorized - No Token Provided" })

        const decode = jwt.verify(token, process.env.JWT_SECRET_TOKEN)

        if (!decode) return res.status(401).json({ error: "Unauthorized - Invalid Token" })

        const user = await userModel.findById(decode.userId).select("-password")

        if (!user) return res.status(401).json({ error: "User not found" })

        req.user = user

        next()

    } catch (error) {
        console.log("Error in utils :is login", error.message)
    }
}