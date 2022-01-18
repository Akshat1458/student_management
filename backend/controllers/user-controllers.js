const { response } = require("express");
const student=require("../models/schema.js");
var mongo = require('mongodb');

module.exports={
    display: async (req,res)=>{
        try{
            let stud=await student.find();
            res.json(stud);

        }catch(error){
            res.json({message: error.message});
        }
    },
    addstudent: async (req,res)=>{
        const stud=req.body;
        const newstud=new student(stud);
        try{
            await newstud.save();
        }catch(error){
            res.json({message: error.message});
        }
    },
    getbyid: async (req,res)=>{
        const ID=req.params.id;
        try{
            const stud=await student.findById(ID);
            res.json(stud);
        }catch(error){
            res.json({message: error.message});

        }
    },
    edit: async (req,res)=>{
        const stud=req.body;
        const editstud=new student(stud);
        try{
            await student.updateOne({_id:req.params.id},editstud);
            response.json(editstud);
        }catch(error){
            res.json({message: error.message});
        }
    },
    deletestud: async (req,res)=>{
        try{
            await student.deleteOne({_id: req.params.id});
            req.json("student deleted");
        }catch(error){
            req.json({message: error.message});
        }
    }
}
// export const display=(req,res)=>{
//     res.send("hello");
// };