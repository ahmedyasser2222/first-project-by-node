const Ajv=require("ajv")
const ajv=new Ajv()

 const schema={
     type:"object",
     properties:{
            name:{
                type:"string",
                minLength:3,
                maxLength:15
            },
            age:{
                type:"integer",
            },
            city:{
                type:"string",
            },
            dep:{
                type:"string"
            }
     },
     required:["name","age","city","dep"]
 }
 module.exports=ajv.compile(schema)