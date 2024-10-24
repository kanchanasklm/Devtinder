const express=require("express");
// const user = require("../models/user");
const userRouter=express.Router();
const {userAuth}=require("../middlewares/auth");
const ConnectionRequest=require("../models/connectionRequest"); 
const USER_SAFE_DATA="firstName lastName age gender photoUrl about skills";
//get all pending connection request for the loggedIn user
//pending means interested
userRouter.get("/user/request/received",
    userAuth,
    async(req,res)=>{
        try{
            const loggedInUser=req.user;
            const connectionRequests=await ConnectionRequest.find({
                toUserId:loggedInUser._id,
                status:"interested",
            }).populate("fromUserId",USER_SAFE_DATA);
            // .populate("fromUserId",["firstName","lastName","age","gender","photoUrl"]);

            res.json({
                message:"Data fetched successfully",
                data:connectionRequests,
            });
        }
        catch(err){
            req.statusCode(400).send("ERROR:"+err.message);        }
    });

userRouter.get("/user/connections",
    userAuth,
    async(req,res)=>{
        try{
            // akshay sent connection to elon that is accepted
            //elon sent connection to mark that is accepted
            //check all connections where elon is touser or fromuser but status is accepted.
            const loggedInUser=req.user;
            const connectionRequests=await ConnectionRequest.find({
                $or:[
                    {toUserId:loggedInUser._id,status:"accepted"},
                    {fromUserId:loggedInUser._id,status:"accepted"},
                ],
            })
            .populate("fromUserId",USER_SAFE_DATA)
            .populate("toUserId",USER_SAFE_DATA);
//get data from fromuser id so map on that.
            const data=connectionRequests.map((row)=>{
                if(row.fromUserId._id.toString()===loggedInUser._id.toString()){
                    return row.toUserId;
                }  
                return row.fromUserId;
            });
        res.json({data});      
    }catch(err){
        res.status(400).send({message:err.message});
    }
    });
module.exports=userRouter;