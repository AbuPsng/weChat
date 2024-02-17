import express from "express"
import { getMessage, sendMessage } from "../controllers/messageController.js"
import { isLogin } from "../utils/utils.js"

const messageRouter = express.Router()

messageRouter.get("/:id", isLogin, getMessage)

messageRouter.post("/send/:id", isLogin, sendMessage)


export default messageRouter