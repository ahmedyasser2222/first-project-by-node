const mongoose =require("mongoose")
const jwt=require("jsonwebtoken")
const config=require("config")

const schema= new mongoose.Schema({
    name:{
        type:String,    
        min:3,
        max:15,
        required:true
    },
    email:{
        type:String ,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
    }
})


schema.method("genAuthToken",function(){
    const token=jwt.sign({
        id:this._id,
        admin:this.admin
    } , config.get("jwtsec"))
    return token
})

module.exports=mongoose.model("users",schema)


