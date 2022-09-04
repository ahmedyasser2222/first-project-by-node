const express=require("express")
const router=express.Router()

const validator =require("../middleWares/usersM-D-Validator")
const Users=require("../models/usersModel")
const bcrypt=require("bcrypt")

router.use(express.json())


router.post("/",validator, async (req,res,nxt)=>{
     const user =await Users.findOne({email:req.body.email}).exec()
     
     if(user) return res.status(400).send("This User already exist")
     
    const salt= await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(req.body.password , salt)
    req.body.password=hashPassword
    if(!req.body.admin) { req.body.admin=false }
    const User= new Users(req.body)
      await User.save().then(e=>{
         const token=  User.genAuthToken()
         res.header("x-id",token)
         res.status(200).send("hello "+req.body.name)
     }).catch(err=>{
         nxt(err)
   })
}) 

router.get("/", async(req ,res)=>{
    const us=await Users.find()
    res.send(us)
})
module.exports=router