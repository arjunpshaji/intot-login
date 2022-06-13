const mongoose= require("mongoose");


const User= new mongoose.Schema({
    email: {type: String, required:true, unique:true},
    name: {type: String, required:true},
    phone: {type: String, required:true},
    password: {type: String, required:true},
},
{collection:"user-data"}
)

const UserData= mongoose.model("UserData", User)

module.exports= UserData;