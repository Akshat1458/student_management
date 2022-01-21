const express= require('express');
const router= express.Router();
const {register}=require("../controllers/users-controllers.js");

router.post('/',register);
module.exports=router;
