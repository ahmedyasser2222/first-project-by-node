const jwt=require("jsonwebtoken")
const config=require("config")

module.exports=(req,res,nxt)=>{

 const token=req.header("x-id")
 if(!token) return res.status(401).send("Access Denied...")
  
  try {
    const paylod=jwt.verify(token , config.get("jwtsec"))
     if(!paylod.admin) return res.status(401).send("Access Denied...")
      
     nxt()

  } catch (error) {
   // res.status(400).send("Invalid token")
   nxt(error)
  }  


}