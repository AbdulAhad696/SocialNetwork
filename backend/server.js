import express from "express"
import cors from "cors"
import "./utility/dbconnect.js"

import signup from "./routes/signup.js";
import signin from "./routes/signin.js";
import usersRouter from "./routes/userRouter.js";
import postRouter from "./routes/postRouter.js ."

const app = express()
const port = process.env.Port || 8001

// middleware
app.use(cors())
app.use(express.json());

// Routes
app.use("/signin", signin)
app.use("/signup", signup)
app.use("/user", usersRouter);
app.use("/post",postRouter)

app.listen(port,()=>console.log(`LISTENING ON PORT: ${port}`))
