const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const route=require('./route/route.js');
const users=require('./route/users.js')
const passport = require("passport");
const bodyparser= require("body-parser");

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
app.use('/users',users);
app.use(passport.initialize());


const start = async () => {
    if (!process.env.DB_URI) {
        throw new Error('auth DB_URI must be defined');
    }
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
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
