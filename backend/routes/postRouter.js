import express from "express";
import Posts from "../models/posts.js";
import mongoose from "mongoose";

const router = express.Router()

// get posts for a user/page/community
router.get("/:name/:purpose",async (req,res)=>{
    let posts = await Posts.find({createdBy:req.params.name,createdFor:req.params.purpose})
    if(posts){
        console.log("Posts Sent")
        res.send({message:"Posts Found",status:true,data:posts})
    }
    else{
        console.log("Failed to send posts")
        res.send({message:"Posts not Found",status:false,data:null})
    }
})

// save posts
router.post("/",async (req,res)=>{
    let post = new Posts(req.body)
    await post.save().then((response)=>{
        console.log("Post Saved")
        res.send({message:"Post Saved",status:true,data:response})
    }).catch((err)=>{
        console.log("Failed to save post")
        res.send({message:"Post not Saved",status:false,data:err})
    })
})

// update post
router.put("/",async(req,res)=>{
    let post = new Posts(req.body)
    if(post){
        res.send({message:"Post updated successfully",status:true})
    }
    else{
        res.send({message:"failed to update Post",status:false})
    }
})
// delete post
router.delete("/", async(req,res)=>{
    let post = await Posts.deleteOne({_id:mongoose.Types.ObjectId(req.body.postID)})
    if (post.deletedCount===1){
        console.log("Post Deleted")
        res.send({message:"Successfully deleted post",status:true})
    }
    else{
        console.log("Failed to delete post")
        res.send({message:"Failed to delete post",status:false})
    }
})

export default router;