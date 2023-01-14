import express from "express"
import cors from "cors"
import signup from "./routes/signup.js"
import "./utility/dbconnect.js"
import signin from "./routes/signin.js"

const app = express()
const port = process.env.Port || 8001

// middleware
app.use(cors())
app.use(express.json());

// Routes
app.use("/signin",signin)
app.use("/signup",signup)


app.listen(port,()=>console.log(`LISTENING ON PORT: ${port}`))
