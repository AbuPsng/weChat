import express from "express"

const messageRouter = express.Router()

messageRouter.post("/sign_up", signUp)

messageRouter.post("/sign_in", signIn)

messageRouter.get("/sign_out", signOut)


export default messageRouter