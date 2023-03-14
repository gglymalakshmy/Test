const express=require("express");
const app=express();
const cors= require("cors")
const testRouter=require("./Routes/testRoute")
const connectDB = require("./Config/database")
connectDB()
app.use(cors())
app.use(express.json())
app.use("/",testRouter)

app.listen(5000,()=>console.log("Server is running..........."))