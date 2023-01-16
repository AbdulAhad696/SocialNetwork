import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        requried: true,
    },
    profile_picture: {
        type: Schema.Types.ObjectId,
        ref: "Image",
        default: null,
    },
    verified: Boolean,
    phone_number: String,
})

var Users = mongoose.model('Users', userSchema);

export default Users;