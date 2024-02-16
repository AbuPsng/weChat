import express from "express"
import dotenv from "dotenv"
import { connectToDatabase } from "./config/connectToMongo.js"

dotenv.config()

const app = express()

const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/api/v1/auth")

app.listen(port, () => {
    connectToDatabase()
    console.log(`server is listening on port ${port}`)
})