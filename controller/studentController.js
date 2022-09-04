const Students=require("../models/studentModel")
const asyncErrorPettern=require("../middleWares/asyncPatternError")

const AddStudent=asyncErrorPettern((req,res ,nxt)=>{
        const student=new Students(req.body)
        student.save().then(e=>{
            res.status(200).send(student)
        }).catch(e=>{
            res.status(403).send("Error in Saving Student"+e)
        })
})

const deleteStudent=asyncErrorPettern(async (req,res,nxt)=>{
        if(req.params.id.length === 24 ){
            const student= await Students.findByIdAndDelete(req.params.id)
            if(!student) res.status(403).send("User Not Found")
            res.status(200).send(student)
        }else{
            res.status(403).send("Id Not valid")
        }
})

const updateStudent=asyncErrorPettern(async(req,res,nxt)=>{
    
        if(req.params.id.length === 24){
            const student = await Students.findByIdAndUpdate(req.params.id,req.body,{returnOriginal:false})
            if(!student) res.status(403).send("User Not Found")
             res.status(200).send(student)
        }else{
            res.status(403).send("Id not Valid ")
        }
})

const getAllStudents= asyncErrorPettern (async (req,res)=>{
    const students=await Students.find()
    console.log("get all")
    if(!students) res.status(403).send("Error to find Students")
    res.status(200).send(students)
})

const getStudentById=asyncErrorPettern(async (req,res,nxt)=>{
    
    if(req.params.id.length === 24){
    const student= await Students.findById(req.params.id)
    if(!student) res.status(403).send("User Not Found")
    res.status(200).send(student)
    }else{
        res.status(400).send("Id Not Valid ")
    }
})

module.exports={AddStudent , deleteStudent ,updateStudent , getAllStudents , getStudentById}

