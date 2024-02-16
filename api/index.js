import express from "express"
import dotenv from "dotenv"
import { connectToDatabase } from "./config/connectToMongo.js"
import authRouter from "./routes/authRouter.js"

dotenv.config()

const app = express()
const port = process.env.PORT

//** middleware */

app.use(express.json())


//** Routes */

app.use("/api/v1/auth", authRouter)

app.listen(port, () => {
    connectToDatabase()
    console.log(`server is listening on port ${port}`)
})