const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.MONGO_URL , {
     useNewUrlParser: true, useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/test", async (req, res)=>{
    try{

        const user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.status(200).json("saved");
    }catch(err){
        res.status(500).json(err);
        console.log(err)
    }
   console.log("done");
})
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register",  (req, res)=> {
    const { name, email, password} = req.body;
    User.findOne({email: email}, async (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            await user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send({message:"Successfully Registered, Please login now."})
                }
            })
        }
    })
    
}) 


// Serve frontend
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/dist"))
}

app.listen(process.env.PORT || 9002,() => {
    console.log("BE started at port 9002")
})