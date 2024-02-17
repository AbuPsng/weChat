import express from "express"
import { signIn, signOut, signUp } from "../controllers/authController.js"

const authRouter = express.Router()

authRouter.post("/send/:id", signUp)

authRouter.post("/sign_in", signIn)

authRouter.get("/sign_out", signOut)


export default authRouter