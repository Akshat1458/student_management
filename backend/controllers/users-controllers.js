const User=require("../models/user.js");
const bcrypt=require ("bcryptjs");

module.exports={
    register: (req,res)=>{
        const {name,email, password}=req.body;

        if(!name || !email || !password){
            return res.status(400).json(req.body);
        }

        User.findOne({email:email})
            .then(user=>{
                if(user)
                    return res.status(400).json({msg: "user already exist"});
                const newUser = new User({
                    name: name,
                    email: email,
                    password:password
                });
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err)
                            throw err;
                        newUser.password=hash;
                        newUser.save()
                            .then(user=>{
                                res.json({
                                    id:user.id,
                                    name:user.name,
                                    email:user.email
                                });
                            });
                    });
                });
            })
    }
};