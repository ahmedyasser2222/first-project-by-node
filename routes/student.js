const express=require("express")
const router=express.Router()
const Students=require("../controller/studentController")
const validator=require("../middleWares/studentM-W-Validator")
const auth=require("../middleWares/authMW.JS")

router.use(express.json())

router.post("/", auth, validator,Students.AddStudent)
router.get("/",Students.getAllStudents)
router.get("/:id",Students.getStudentById)
router.delete("/:id", auth,Students.deleteStudent)
router.put("/:id",Students.updateStudent)



module.exports=router
