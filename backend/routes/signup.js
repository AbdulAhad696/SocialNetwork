import express from "express"
import User from "../models/user.js"

const router = express.Router()
router.get("/:email",async(req,res)=>{
    console.log(req.params.email)
    let user = await User.findOne({email:req.params.email})
    console.log(user)
    if (user){
        res.send(user)
    }
    else{
        res.send({message:"nahin milla bhai"})
    }
})
router.post("/",async(req,res)=>{
    console.log("Checking User",req.body)
    let user = await User.findOne({email:req.body.email})
    if(user){
        res.send({message:"User with this email already exists",status:false})
    }
    else{
        console.log("Attempting to save")
        user = new User(req.body)
        await user.save().then((resp)=>{
            res.send({message:"User has been Saved Successfully",status:true})
        }).catch((err)=>{
            console.log(err)
        })
    }
    
})

export default router