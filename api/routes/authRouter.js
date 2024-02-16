import express from "express"
import { signIn, signOut, signUp } from "../controllers/authController.js"

const authRouter = express.Router()

authRouter.post("/sign_up", signUp)

authRouter.post("/sign_in", signIn)

authRouter.get("/sign_out", signOut)


export default authRouter