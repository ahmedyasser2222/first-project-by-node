const mongoose=require("mongoose")

const student= mongoose.model("students",new mongoose.Schema({
    name:{
        type:String,
        max:15,
        min:3
    },
    age:{
        type:Number,
    },
    city:{
        type:String
    },
    dep:{
        type:String
    }
}))

module.exports=student