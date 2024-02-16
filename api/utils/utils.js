import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

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
    console.log(userId)
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_TOKEN, { expiresIn: "2d" })

    if (!token) return res.status(400).json({ error: "Failed to generate JWT token" })

    res.cookie("weChat-token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}