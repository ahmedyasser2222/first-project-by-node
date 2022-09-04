const express=require("express")
const mongoose=require("mongoose")
const app=express()


app.use(express.json())
const errorMD=require("./middleWares/errorMD")
mongoose.connect("mongodb://localhost:27017/project").then(e=>{
    console.log("Conected Database ")
}).catch(err=>{
    console.log("Faild to conect database ")
})

const studentRouter=require("./routes/student")
const usersRouter=require("./routes/users")
const loginRouter=require("./routes/login")
const adminRouter=require("./routes/admin")

         /* ===== */
app.use("/students",studentRouter)
app.use("/register",usersRouter)
app.use("/login",loginRouter)
app.use("/admin",adminRouter)

process.on("uncaughtException",(ex)=>{
    console.log("exeption error")
})

app.use(errorMD) // erpress err MD



app.listen(3000,()=>{
    console.log("App Start At port 3000")
})


