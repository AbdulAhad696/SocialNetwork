import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    phoneNumber:String,
    password:String
})
export default mongoose.model("users",userSchema)