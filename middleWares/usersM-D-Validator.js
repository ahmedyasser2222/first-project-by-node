const validator=require("../utile/usersValidator")

module.exports=(req,res,nxt)=>{
    const valid=validator(req.body)
    if(!valid) return res.status(403).send("Data Not Valid")
    nxt()
}