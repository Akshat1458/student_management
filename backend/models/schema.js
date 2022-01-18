const mongoose= require("mongoose");

const schema=mongoose.Schema({
    name:String,
    roll_no: Number,
    class: String  
},{ "_id": false });

module.exports=mongoose.model('students',schema);
