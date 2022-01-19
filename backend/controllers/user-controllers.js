const { response } = require("express");
const student=require("../models/schema.js");
const multer= require("multer");

const storage= multer.diskStorage({
    destination: (req,file,callback )=>{
        callback(null,"../frontend/public/uploads");
    },
    filename: (req,file,callback)=>{
        callback(null, file.originalname);
    }
});

const upload= multer({storage: storage});

module.exports={
    display: async (req,res)=>{
        try{
            let stud=await student.find();
            res.json(stud);

        }catch(error){
            res.json({message: error.message});
        }
    },
    upload,
    addstudent: async (req,res)=>{
        
        const stud=req.body;
        const newstud=new student({
            name:stud.name,
            roll_no: stud.roll_no,
            class: stud.class,
            img: req.file.name
        });
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