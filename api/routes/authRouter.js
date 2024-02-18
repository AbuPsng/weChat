import express from "express"
import { keepSignIn, signIn, signOut, signUp } from "../controllers/authController.js"
import { isLogin } from "../utils/utils.js"

const authRouter = express.Router()

authRouter.post("/sign_up", signUp)

authRouter.post("/sign_in", signIn)

authRouter.get("/is_sign_in", isLogin, keepSignIn)

authRouter.get("/sign_out", signOut)


export default authRouter