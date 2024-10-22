/** 
const adminAuth=(req,res,next)=>{
    console.log("Admin auth is getting checked");
    const token="xyz";
    const isAdminAuthorized=token==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");

    }
    else{
        next();
    }
}


const userAuth=(req,res,next)=>{
    console.log("Admin auth is getting checked");
    const token="xyz";
    const isAdminAuthorized=token==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");

    }
    else{
        next();
    }
}
module.exports={
    adminAuth,userAuth
}
*/

// --10
const jwt=require("jsonwebtoken");
const User=require("../models/user");
const userAuth=async (req,res,next)=>{
    try{
        const {token}=req.cookies;
        if(!token){
            throw new Error("Token is not valid!!!!!!!!!");
        }
        const decodeObj=await jwt.verify(token,"DEV@TINDER$790");

    const {_id}=decodeObj;
    const user=await User.findById(_id);
if(!user){
    throw new Error("User not found");
}
req.user=user; //attach user to request
next();//to handle request handlers

    }
    catch(err){
        res.status(404).send("ERROR:"+err.message);
    }
};

module.exports={
    userAuth
}