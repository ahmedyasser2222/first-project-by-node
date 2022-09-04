const express=require("express")
const router=express.Router()
const validator =require("../middleWares/loginMW")
const Users=require("../models/usersModel")
const bcrypt=require("bcrypt")

router.use(express.json())


router.post("/",validator, async (req,res,nxt)=>{

   try  {
        const user =await Users.findOne({email:req.body.email}).exec()
     
        if(!user) return res.status(400).send("Error in Email or Password")
        
        const validPassword= await bcrypt.compare(req.body.password , user.password)

        if(!validPassword) return res.status(400).send("Error in Email or Password")

        const token=user.genAuthToken()
        res.header("x-id",token)
        res.status(200).send("hello "+user.name)

    }catch(err){
        nxt(err)
    }// end catch

}) // end post  

module.exports=router


