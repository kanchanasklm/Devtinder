

// ************************************************************************************
// 11--

    const express = require("express");
    const connectDB = require("./config/database");
    const app = express();
    const cookieParser=require("cookie-parser");
   
    
    app.use(express.json());
    app.use(cookieParser());
    
    //import routers
    const authRouter=require("./routes/auth");
    const profileRouter=require("./routes/profile");
    const requestRouter=require("./routes/request");
    const userRouter=require("./routes/user");

    
    //handle all routes according to routes 
    app.use("/",authRouter);
    app.use("/",profileRouter);
    app.use("/",requestRouter);
    app.use("/",userRouter);
    
    
    connectDB()
        .then(() => {
            console.log("Database connection succesful");
            app.listen(7777, () => {
                console.log("server is sucessfully listening on port 7777")
            });
    
        })
        .catch((err) => {
            console.log("Database cannot be connected");
    
        });