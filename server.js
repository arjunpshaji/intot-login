const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");
const User= require("./models/user.model");
const jwt= require("jsonwebtoken");
// const bodyParser=require('body-parser'); 
// const routes=require('./router/user.router'); 
// var axios = require('axios');

app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/intot');
mongoose.connect("mongodb+srv://arjunpshaji:arjun764%40%40@cluster0.3yhl5.mongodb.net/intotDB");
// {useNewUrlParser:true,useUnifiedTopology:true}

app.post("/api/register", async(req,res)=>{
    console.log(req.body);
    try{
        await User.create({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password
        })
        res.json({status: "ok"});
    }catch(err){
        res.json({status: "error", error: "Duplicate email"});
    }
    
});

app.post("/api/login", async(req,res)=>{
    console.log(req.body);
        const user= await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if (user){

            const token= jwt.sign({
                email: user.email,
                name: user.name

            }, "secret123")

            return res.json({status: "ok", user:token});
        }
        else{
            return res.json({status: "error", user: false});
        }

});

app.get("/users", async(req, res)=>{
    User.find()
        .then(foundUsers=> res.json(foundUsers))
})

// var data = JSON.stringify({
//     "collection": "user-data",
//     "database": "intotDB",
//     "dataSource": "Cluster0",
// });
            
// var config = {
//     method: 'post',
//     url: 'https://data.mongodb-api.com/app/data-okmtb/endpoint/data/beta/action/find',
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Request-Headers': '*',
//         'api-key': 'KjhTHegBs87GvUQLFLqraWySbf8D1EfcwNW9Xwa2UJ0JdKVfLECXbD9MXJM4XvUW'
//     },
//     data : data
// };
            
// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// app.get("/api/register", async(req,res)=>{
//         const usersata =await User.find({
//             email: req.body.email,
//             name: req.body.name,
//             password: req.body.password
//         })
//         res.send(usersata);
        
 
// });



// app.get('api/stored', (req, res) => {
//     console.log(req.data);
//     db.collection('user-data').findOne(req.body, (err, data) => {
//         if(err) return console.log(err);
//         res.send(('data' + data));
//     })
// });


app.listen(3001, ()=>{
    console.log("server started...");
})


// app.use(bodyParser.json()) 
// app.use(routes) 
