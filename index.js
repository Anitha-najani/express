const express=require("express")
const app=express()
const cors=require("cors")
const port=2000;
const students=require("./data.js")

const employee={id:33,name:"react",position:"frontend"}

app.use(cors())
app.get("/",(req,res)=>{
	res.send("starting route")
})

app.get("/demo",(req,res)=>{
	res.send("This is demo route")
})
app.get("/emp",(req,res)=>{
	res.json(employee)
})

app.get("/students-list",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server is running on port 2000"))