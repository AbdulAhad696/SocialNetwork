import express from "express"
import Users from "../models/user.js"

const router = express.Router()
router.get("/:username/:password",async(req,res)=>{
    console.log(req.params.username)
    let user = await Users.findOne({username:req.params.username})
    if(user){
        if(user.password===req.params.password){
            res.send({message:"User Found",status:true,userData:user})
        }
        else{
            res.send({message:"Wrong Password",status:false})
        }
    }
    else{
        res.send({message:"User with this username doesnot exists",status:false})
    }
})

export default router;
