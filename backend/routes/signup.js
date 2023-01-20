import express from "express"
import Users from "../models/user.js"

const router = express.Router()

// test username uniqueness
router.get("/:username",async(req,res)=>{
    let username = await Users.findOne({username:req.params.username})
    if(username){
        res.send({message:"User with this username already exists.",status:false})
    }
    else{
        res.send({message:"Username not found",status:true})
    }
})
// test email uniqueness
router.get("/:email",async(req,res)=>{
    
    let user = await User.findOne({email:req.params.email})
    
    if (user){
        console.log("User Found")
        res.send(user)
    }
    else{
        console.log("User Not found")
        res.send({message:"User not Found",status:false})
    }
})
// create user
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