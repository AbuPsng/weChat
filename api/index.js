import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path"

import authRouter from "./routes/authRouter.js"
import messageRouter from "./routes/messageRouter.js"
import userRouter from "./routes/userRouter.js"

import { connectToDatabase } from "./config/connectToMongo.js"
import { app, server } from "./socket/socket.js"

dotenv.config()

const port = process.env.PORT

const __dirname = path.resolve()

//** middleware */

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "https://wechat-jxju.onrender.com/"
}))
app.use(cookieParser())


//** Routes */

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/messages", messageRouter)

app.use(express.static(path.join(__dirname, "/client/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

server.listen(port, () => {
    connectToDatabase()
    console.log(`server is listening on port ${port}`)
})