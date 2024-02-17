import express from "express"
import { sendMessage } from "../controllers/messageController.js"
import { isLogin } from "../utils/utils.js"

const messageRouter = express.Router()

messageRouter.post("/send/:id", isLogin, sendMessage)


export default messageRouter