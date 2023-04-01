const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose")
const path = require("path")


const app = express();
app.use(express.static(path.join(__dirname,"./signupform/build")))
app.use(cors());

const upload = multer();

let connectToMDB= async()=>{
try {
   await mongoose.connect("mongodb+srv://kondraramesh3492:ramesh@cluster0.v1xtucj.mongodb.net/April2023?retryWrites=true&w=majority")
   console.log("successfully connected to DB") 
} catch (error) {
    console.log(" something went wrong in  DB")
}
}
connectToMDB();

let usersSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    mobileno:Number,
    gender:String,
    maritalStatus:String
})

let Users = new mongoose.model("students2023",usersSchema);

app.post("/signUp", upload.none(), async(req,res)=>{
    console.log(req.body)

    let newUsers = new Users({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        mobileno:req.body.mobileno,
        gender:req.body.gender,
        maritalStatus:req.body.maritalStatus
    })

    try {
        await newUsers.save();
        console.log("successfully saved")
        res.json({status:"success"})
    } catch (error) {
        console.log("not saved")
        res.json({status:"failed"})
    }

})

app.listen(2345,()=>{
    console.log("listening to port 2345")
})

