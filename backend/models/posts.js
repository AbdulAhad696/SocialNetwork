import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    createdBy:{
        type: Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    createdOn:{
        type:Schema.Types.Date,
        required:true
    },
    createdFor:{
        type:String,
        required:true
    },
    postText:String,
    media:[{
        type: Schema.Types.ObjectId,
        ref: "Image",
        default: null,
    }],
    Poll:{
        type:Schema.Types.ObjectId,
        ref:"Polls",
        default:null
    },
    likes:[{type: Schema.Types.ObjectId,
        ref:"Users",
        default:null
    }],
    dislikes:[{type: Schema.Types.ObjectId,
        ref:"Users",
        default:null
    }],
    comments:[{
        type: Schema.Types.ObjectId,
        ref:"Comments",
        default:null
    }]
})

var Posts = mongoose.model('Posts', postSchema);

export default Posts;