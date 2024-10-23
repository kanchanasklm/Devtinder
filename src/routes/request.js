
const express=require("express");
const requestRouter=express.Router();
const {userAuth} =require("../middlewares/auth");
const ConnectionRequest=require("../models/connectionRequest");
const User=require("../models/user");
requestRouter.post("/request/send/:status/:toUserId",
    userAuth,
    async(req,res)=>{
    try{
        const fromUserId=req.user._id;
        const toUserId=req.params.toUserId;
        const status=req.params.status;

        //this api only allows either ignore aor interested status
        const allowedStatus=["ignore","interested"];
        if(!allowedStatus.includes(status)){
            return res
            .status(400)
            .json({message:"Invalid status type:"+status});
        }

        

        //if user doesnot exists in database gives msg
        const toUser=await User.findById(toUserId);
        if(!toUser){
            return res.status(404).json({message:"User not Found"});
        }

        //if connection already exists gives msg
        const existingConnectionRequest=await ConnectionRequest.findOne({
            $or:[
                {fromUserId,toUserId},
                {fromUserId:toUserId,toUserId:fromUserId},
            ],         
            
        });

        

        if(existingConnectionRequest){
            return res
            .status(400)
            .send({message:"Connection Request Alreday Exists!!!"});
        }
//create new instance
        const connectionRequest=new ConnectionRequest({
            fromUserId,
            toUserId,
            status,
        });

        //save in database
        const data=await connectionRequest.save();
//send to user
        res.json({
            // message:"Connection Request Sent Successfully",
            message: 
            req.user.firstName + "is" + status + "in" + toUser.firstName,
        data,      
    });

        }
    catch(err){
        res.status(400).send("ERROR:"+err.message);    }

});

module.exports=requestRouter;