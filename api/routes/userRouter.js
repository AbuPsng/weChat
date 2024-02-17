import express from "express"
import { getUserForSidebar } from "../controllers/userController.js"
import { isLogin } from "../utils/utils.js"

const userRouter = express.Router()

userRouter.get("/", isLogin, getUserForSidebar)


export default userRouter