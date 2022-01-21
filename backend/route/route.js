const express = require("express");
const {display,upload,addstudent,getbyid,searching,edit,deletestud}=require("../controllers/user-controllers.js")
const route= express.Router();

route.get("/",display);
route.post("/add",upload.single("img"),addstudent);
route.get("/:id",getbyid);
route.post("/search",searching);
route.put("/:id",edit);
route.delete("/:id",deletestud);


module.exports= route;