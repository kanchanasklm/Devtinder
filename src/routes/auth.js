
const express=require("express");
const authRouter=express.Router();

const{validateSignUpData}=require("../utils/validation");
const User=require("../models/user"); 
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

authRouter.post("/signup",async(req,res)=>{
    console.log(req.body);
    //creating a new instance of user model
    const user=new User(req.body);
    try{
        //validation of data
        validateSignUpData(req);
    
        const {firstName,lastName,emailId,password}=req.body;
        
        //Encrypt the password
        const passwordHash=await bcrypt.hash(password,10);
        console.log(passwordHash);
    
        //create a new instance of the user model
        const user=new User({
            firstName,
            lastName,
            emailId,
            password:passwordHash
        })
    
    await user.save(); 
    res.send("User Addes succesfully");
    }
    catch(err){
        res.status(400).send("ERROR:"+err.message);
    }
    });
    
authRouter.post("/login",async(req,res)=>{
    try{
        const {emailId,password}=req.body;
    
            const user=await User.findOne({emailId:emailId});
            if(!user){
                throw new Error("Invalid credentials");
            }
            
            const isPasswordValid=await user.validatePassword(password);
    
            if(isPasswordValid){
                
                const token = await user.getJWT();
                console.log(token);
                res.cookie("token",token,{
                    expires:new Date(Date.now()+8*3600000),
                });
                
                res.send("Login Successfully");
    
            }
            else{
                throw new Error("Invalid credentials");
    
            }
        }
            catch(err){
                res.status(404).send("ERROR:"+err.message);
            }
    
    });

authRouter.post("/logout",async(req,res)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now())
    });
    res.send("Logout Successful");
})


module.exports=authRouter;