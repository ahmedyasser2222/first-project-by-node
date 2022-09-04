module.exports= (err,req,res,nxt)=>{
     console.log(err.message)
     res.status(500).send("Internal Server Error ...")
}

