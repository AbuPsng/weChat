import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRouter from "./routes/authRouter.js"
import messageRouter from "./routes/messageRouter.js"
import userRouter from "./routes/userRouter.js"

import { connectToDatabase } from "./config/connectToMongo.js"

dotenv.config()

const app = express()
const port = process.env.PORT

//** middleware */

app.use(express.json())
app.use(cookieParser())


//** Routes */

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/messages", messageRouter)
app.use("/api/v1/users", userRouter)

app.listen(port, () => {
    connectToDatabase()
    console.log(`server is listening on port ${port}`)
})