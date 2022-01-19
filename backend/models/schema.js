const mongoose= require("mongoose");

const schema=mongoose.Schema({
    name:String,
    roll_no: Number,
    class: String,
    img: String, 
});

module.exports=mongoose.model('students',schema);
