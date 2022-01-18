const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const route=require('./route/route.js');
// const dbRouter = require('./dbroutes');
const passport = require("passport");
const bodyparser= require("body-parser");
// const users = require("./routes/users");

dotenv.config();
const app=express();
app.use(bodyparser.json({extended: true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000
const uri = process.env.DB_URI

app.get('/',(req,res)=>{
    res.send("Hello")
});
app.use('/user',route);
app.use(passport.initialize());
// Passport config
// require("./config/passport")(passport);
// Routes
// app.use("/api/auth", users);

const start = async () => {
    if (!process.env.DB_URI) {
        throw new Error('auth DB_URI must be defined');
    }
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('Server connected to MongoDb!');
    } catch (err) {
        
        console.error(err);
    }
  
    const port = process.env.PORT || 8000
    app.listen(port, () => {
        console.log(`Server is listening on ${port}!!!!!`);
    });
  };
  
  start();
