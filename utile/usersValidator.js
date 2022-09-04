const Ajv=require("ajv")
const ajv=new Ajv()

 const schema={
     type:"object",
     properties:{
            name:{
                type:"string",
                minLength:3,
                maxLength:15,
            },
            email:{
                type:"string",
                pattern:".+\@.+\..+"
            },
            password:{
                type:"string",
            },
            
            
     },
     required:["name","email","password"]
 }
 module.exports=ajv.compile(schema) 