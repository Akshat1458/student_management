const express = require("express");
const {display,addstudent,getbyid,edit,deletestud}=require("../controllers/user-controllers.js")
const route= express.Router();

route.get("/",display);
route.post("/add",addstudent);
route.get("/:id",getbyid);
route.put("/:id",edit);
route.delete("/:id",deletestud);


module.exports= route;