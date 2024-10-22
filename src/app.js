///////////////////////////////3

// console.log("hi");

// const express=require("express");

// const app=express();

// app.use("/",(req,res)=>{
//     res.send("Hello hi");
// });

// app.use("/hello",(req,res)=>{
//     res.send("Hello hello hello");
// });

// app.use("/test",(req,res)=>{
//     res.send("Hello from the server");
// });





// app.listen(7777,()=>{
//     console.log("server is sucessfully listening on port 7777")
// });

//it will give only hello hi as output.because any thing starts with / it can access or process  in callback.so for any path it will give hello hi.
//so below way is correct

//////////////////////////////////////////4

// console.log("hi");

// const express=require("express");

// const app=express();

// app.use("/test",(req,res)=>{
//     res.send("Hello from the server");
// });

// app.use("/hello",(req,res)=>{
//     res.send("Hello hello hello");
// });

// app.use("/",(req,res)=>{
//     res.send("Hello hi");
// });

// app.listen(7777,()=>{
//     console.log("server is sucessfully listening on port 7777")
// });



//////////////////////////////////////////////////////////////////////////

// console.log("hi");

// const express=require("express");

// const app=express();

// app.use("/hello/12",(req,res)=>{
//     res.send("Hello from the server");
// });

// app.use("/hello",(req,res)=>{
//     res.send("Hello hello hello");
// });

// app.use("/",(req,res)=>{
//     res.send("Hello hi");
// });

// app.listen(7777,()=>{
//     console.log("server is sucessfully listening on port 7777")
// });

//////////////////////////////////////////////////////////////////////////

// console.log("hi");

// const express=require("express");

// const app=express();

// app.use("/hello",(req,res)=>{
//     res.send("Hello from the server");
// });

// app.use("/hello/12",(req,res)=>{
//     res.send("Hello hello hello");
// });

// app.use("/",(req,res)=>{
//     res.send("Hello hi");
// });

// app.listen(7777,()=>{
//     console.log("server is sucessfully listening on port 7777")
// });

/////////////////////////////////////////////////////

/** 
console.log("hi");

const express=require("express");

const app=express();



app.use("/user",(req,res)=>{
    res.send("HAHAHAHHHA");
});

//this will match only get api calls
app.get("/user",(req,res)=>{
    res.send({firstname:"kanchana",lastname:"palavalasa"});
});

//this will match only post api calls
app.post("/user",(req,res)=>{
    res.send("data saved successfuly in database");
});

//this will match only delete api
app.delete("/user",(req,res)=>{
    res.send("Deleted successfully");
});

//this will match all http methods
app.use("/test",(req,res)=>{
    res.send("Hello from the server");
});

app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});

*/


////////////////////////////////////////
//different complex routes//

/** 
const express=require("express");

const app=express();

// this will handler  like /user, /user/xyz,/user/1
// app.use("/user",(req,res)=>{
//     res.send("HAHAHAHHHA");
// });


//complex routes examples

app.use("/abc",(req,res)=>{
    res.send("HAHAHAHHHA");
});

//that means b is optional.if we request /ac,/abc.it will work
app.use("/ab?c",(req,res)=>{ 
    res.send("HAHAHAHHHA");
});

//that means a and c are last .and we can add as much of b we want.if we request /abc,/abbbbc.it will work.but it doesnot work /abcc.
app.use("/ab+c",(req,res)=>{ 
    res.send("HAHAHAHHHA");
});

//it will work /abcd.if we write anything between ab and cd it will work.like abjfhsdkfjhsfcd.
app.use("/ab*cd",(req,res)=>{ 
    res.send("HAHAHAHHHA");
});


app.use("/abc?d",(req,res)=>{ 
    res.send("HAHAHAHHHA");
});

//here bc is optional.like /ad
app.use("/a(bc)?d",(req,res)=>{ 
    res.send("HAHAHAHHHA");
});

///abcd,abbcbcbcbbd .it works
app.use("/a(bc)+d",(req,res)=>{ 
    res.send("HAHAHAHHHA");
});

///////////////////////////////////////////
//writing regex instead of string

// if in path a letter is there it will work.like /cab
app.use(/a/,(req,res)=>{ 
    res.send("HAHAHAHHHA");
});

// if route starts with * and ends with fly it Work
app.use(/.*fly$/,(req,res)=>{ 
    res.send("HAHAHAHHHA");
});

//routes also like this dynamic ids.like 
// https://loalhost:7777/user?userId=101.
//https://loclhost:7777/user?userId=101&password=testing.
// (userId=101)=>theses are query params.
app.use("/user",(req,res)=>{ 
    console.log(req.query)//this give info about query paraams.
    res.send("HAHAHAHHHA");
});



//make dynamic routes like 
//https://loalhost:7777/user/101
//https://loalhost:7777/user/102
//:dynamic route
app.use("/user/:userId/:name/;password",(req,res)=>{ 
    console.log(req.params)
    res.send("HAHAHAHHHA");
});

*/



///////////////////////////////////////5.Middleware/////////////////////////////
/** 
const express=require("express");

const app=express();

what will happen if we dont send response.below is example
app.use("/user",(req,res)=>{ 
    //route handler
    //res.send("HAHAHAHHHA");
});
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/



//**********************************************************
// handling different route handler with same route
//output is Response.when we hit this api  request  comes here it goes to first route handler.it executes line by line.bcz it is nodejs code.in v8 it executes line by line.it will not go further.
/** 
const express=require("express");
const app=express();
app.use(
    "/user",
    (req,res)=>{ 
        console.log("handling route requetss")
            res.send("Response");
        },
    

(req,res)=>{ 
   
        console.log("handling route requetss");
        res.send("2nd response");
},

);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/


//******************************************************** 
/** 
const express=require("express");

const app=express();
//what will happen if we dont send response from first route handler.
//will it go second route handler.No bcz node or express doenot automically does that.
//how will go to next route handler.by use next() function we will go to next handler.
app.use(
    "/user",
    (req,res)=>{ 
        console.log("handling route requetss")
        // res.send("Response");
        },
    (req,res)=>{ 
   
        console.log("handling route requetss");
        res.send("2nd response");
},

);


app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});

*/
// *************************************************
// ********************************************
//when request goes to server,server says it the time to request /user it will go to first route handler.here there is no response to send.after that there is next function.this next function given by expreess
//express says whenver request will  came req,res object  will pass into function and next parameter will pass as third parameter.it will call next function it will automaatically go to next rote handler.it executes line by line send the response.
/** 
const express=require("express");

const app=express();

    app.use("/user",
    (req,res,next)=>{ 
        console.log("handling route requetss");
        // res.send("Response");
        next()
        },
    (req,res)=>{ 
   
        console.log("handling route requetss");
        res.send("2nd response");
},

);

app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});

*/

// *******************************************************************

//it will give Response.and also gives error "Cannot set headers after they are sent to the client"
//whenever we a request it will go first route handler execute code line by line.like print console.send response,execute next means go to second route handler.print console.again our code try to respond with response2.but it will not happen
//bcz http are tcp connections.means whenever we sent a request tcp connection sent after getting data connection will closed for every request.so after connection loose we try to sent reponse.thats why we get error.
//this is not good 
/** 
const express=require("express");
const app=express();

    app.use("/user",
    (req,res,next)=>{ 
        console.log("handling route requetss");
        res.send("Response");
        next()
        },
    (req,res)=>{ 
        console.log("handling route requetss1");
        res.send("2nd response");
},

);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});

*/

//***************************************************** */
//it will give second route handler response.bcz js code execute code line by line.after second route handler executes it will go to first route handler.here we are trying to respond to client ,the request is already  fullfilled.
//as like before it will give error.
//the route handlers are multiple if we want to handle multiple route handlers add more .using next().
/** 
const express=require("express");
const app=express();

    app.use("/user",
    (req,res,next)=>{ 
        // console.log("handling route requetss");
        next();
        console.log("handling route requetss");
        res.send("Response");
        },
    (req,res)=>{ 
        console.log("handling route requetss1");
        res.send("2nd response");
},

);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/


//************************************************* */
//it will print 2nd response.
//3rd or 4th response never call because there is no next function
/** 
const express=require("express");
const app=express();

    app.use("/user",
    (req,res,next)=>{ 
        console.log("handling route requetss");
        next();
        
        },
    (req,res)=>{ 
        console.log("handling route requetss1");
        res.send("2nd response");
},

(req,res)=>{ 
    console.log("handling route requetss3");
    res.send("3rd response");
}, 

(req,res)=>{ 
    console.log("handling route requetss4");
    res.send("4th response");
},

);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});

*/

//************************************** */
//3rd response will print
/** 
 
const express=require("express");
const app=express();

    app.use("/user",
    (req,res,next)=>{ 
        console.log("handling route requetss");
        next();
        
        },
    (req,res,next)=>{ 
        console.log("handling route requetss2");
        // res.send("2nd response");
        next()
},

(req,res)=>{ 
    console.log("handling route requetss3");
    res.send("3rd response");
}, 

(req,res)=>{ 
    console.log("handling route requetss4");
    res.send("4th response");
},

);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/


//************************************** */
//4th response will print
/** 
const express=require("express");
const app=express();

    app.use("/user",
    (req,res,next)=>{ 
        console.log("handling route requetss");
        next();
        
        },
    (req,res,next)=>{ 
        console.log("handling route requetss2");
        // res.send("2nd response");
        next()
},

(req,res,next)=>{ 
    console.log("handling route requetss3");
    // res.send("3rd response");
    next()
}, 

(req,res)=>{ 
    console.log("handling route requetss4");
    res.send("4th response");
},

);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});

*/
//////////////////////////////////////////////////////////////
//it gives "Cannot GET /user".bcz after there is no response to sent.
/** 
const express=require("express");
const app=express();

    app.use("/user",
    (req,res,next)=>{ 
        console.log("handling route requetss");
        next();
        
        },
    (req,res,next)=>{ 
        console.log("handling route requetss2");
        // res.send("2nd response");
        next()
},

(req,res,next)=>{ 
    console.log("handling route requetss3");
    // res.send("3rd response");
    next()
}, 

(req,res,next)=>{ 
    console.log("handling route requetss4");
    // res.send("4th response");
    next()
},

);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/



//////////////////////////////////////////////
//the request is hanged, goes to infinite loop.
/** 
const express=require("express");
const app=express();

    app.use("/user",
    (req,res,next)=>{ 
        console.log("handling route requetss");
        next();
        
        },
    (req,res,next)=>{ 
        console.log("handling route requetss2");
        // res.send("2nd response");
        next()
},

(req,res,next)=>{ 
    console.log("handling route requetss3");
    // res.send("3rd response");
    next()
}, 

(req,res,next)=>{ 
    console.log("handling route requetss4");
    // res.send("4th response");
    // next()
},

);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/

/////////////////////////////////////////////////////////////////////
// we also sent all handlers in array 
//we also put 20r 3 functions  instead of all.it will give same response.
// example
// app.use("/route",[rH,rH2,rH3,rH4,rH5]);
// app.use("/route",rH,rH2,rH3,[rH4,rH5]);
// app.use("/route",rH,[rH2,rH3],rH4,rH5);


/** 
const express=require("express");
const app=express();

    app.use("/user",[
        
    (req,res,next)=>{ 
        console.log("handling route requetss");
        next();
        
        },
    (req,res,next)=>{ 
        console.log("handling route requetss2");
        // res.send("2nd response");
        next()
},

(req,res,next)=>{ 
    console.log("handling route requetss3");
    // res.send("3rd response");
    next()
}, 

(req,res,next)=>{ 
    console.log("handling route requetss4");
    // res.send("4th response");
    next()
},
(req,res,next)=>{ 
    console.log("handling route requetss4");
    res.send("5th response");
    
},
]);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/

//////////////////////////////////////////////////////////
/** 
const express=require("express");
const app=express();

    app.use("/user",[
        
    (req,res,next)=>{ 
        console.log("handling route requetss");
        next();
        
        },
    (req,res,next)=>{ 
        console.log("handling route requetss2");
        // res.send("2nd response");
        next()
}],

(req,res,next)=>{ 
    console.log("handling route requetss3");
    // res.send("3rd response");
    next()
}, 

(req,res,next)=>{ 
    console.log("handling route requetss4");
    // res.send("4th response");
    next()
},
(req,res,next)=>{ 
    console.log("handling route requetss4");
    res.send("5th response");
    
},
);
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});

*/


////////////////////////////////////////////////////////////
//Another way of handling route handlers
//create a same route with different handlers.
//sequence is matter a lot
//
/** 
const express=require("express");
const app=express();

    app.get("/user",(req,res,next)=>{ 
        console.log("handling route requets1");
        next();
        
        });
        
    app.get("/user",(req,res,next)=>{ 
        console.log("handling route requetss2");
        res.send("2nd response")
        
        });
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});

*/

/////////////////////////////////
//give 1st response
/** 
const express=require("express");
const app=express();

    app.get("/user",(req,res,next)=>{ 
        console.log("handling route requets1");
        res.send("1st response")
        
        });
        
    app.get("/user",(req,res,next)=>{ 
        console.log("handling route requetss2");
        next()
        
        });
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/

/////////////////////////////////////
// gives like Cannot GET /user.bcz expecting one more route
/** 
const express=require("express");
const app=express();

    app.get("/user",(req,res,next)=>{ 
        console.log("handling route requets1");
        // res.send("1st response")
        next()
        
        });
        
    app.get("/user",(req,res,next)=>{ 
        console.log("handling route requetss2");
        next()
        
        });
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/

///////////////////////////////////////////////
//it will go to infinite loop
/** 
const express=require("express");
const app=express();

    app.get("/user",(req,res,next)=>{ 
        console.log("handling route requets1");
        // res.send("1st response")
        next()
        
        });
        
    app.get("/user",(req,res,next)=>{ 
        console.log("handling route requetss2");
        // next()
        
        });
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});

*/

// **************************************************
//why do we make multiple route handlers,next.instead of that making one route handler to handle everthing.
//why exxpress doing all this.bcz of for middlewares.
//route handlers are just the functions for handling the routes and send the response.
//if these route handlers put in the middle .thses are middleawares.

//Handling / route =>output.bcz / handles all requests 
/*
const express=require("express");
const app=express();

   app.use("/",(req,res,next)=>{
    // res.send("Handling / route")
    next()
   })

    app.get(
        "/user",
        (req,res,next)=>{
            console.log("handling /user route") //middleware
            next();
        },
        (req,res,next)=>{ //middleware
            res.send("1 response");
            next();
        },
        (req,res,next)=>{ 
            res.send("2ndst response")
            
        },
        
        
        
        );
        
    
app.listen(7777,()=>{
    console.log("server is sucessfully listening on port 7777")
});
*/


// *******************************************************
// ******************************************************
//why we need middlewares
/** 
const express=require("express");
const app=express();

const {adminAuth, userAuth}=require("./middlewares/auth")

//handle auth middleware for all get,post...request
app.use('/admin',adminAuth);
// app.use('/user',userAuth);

app.post("/user/login",(req,res)=>{
    res.send("user logged in seccessflly")
})
app.get("/user",userAuth,(req,res)=>{
    res.send("user data sent");
})

app.get("/admin/getAllData",(req,res)=>{
    res.send("all data sent");
})

app.get("/admin/deleteUser",(req,res)=>{
    res.send("delete a user");
})

app.listen(7777,()=>{ 
console.log("server is sucessfully listening on port 7777")
});

*/


// ******************************************
// error handling
/**
const express=require("express");

const app=express();

// app.use("/",(err,req,res,next)=>{
//     if(err){
//         res.status(500).send("something went wrong");
//     }
// });

app.get("/getUserData",(req,res)=>{
    try{
        //logic to get data
        throw new Error("djjdhbsjf");
        res.send("User Data Sent");
    }
    catch(error){
        res.status(500).send("Some Error contact support team");

    }
});
app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong");
    }
});

app.listen(7777,()=>{ 
    console.log("server is sucessfully listening on port 7777")
    });
    
    */


// 6**********************************************
//this code after server connection database is connected.this is bad way.bcz when user hit apis ,if database is not connected they dont get data.

// const express=require("express");
// require("./config/database")
// const app=express();

// app.listen(7777,()=>{ 
//     console.log("server is sucessfully listening on port 7777")
//     });


// **********************************
//so first we do connect database,and then listen on server.
//for that export connectdb and then import into app.js .once datbase connection succesful start listen on server.
/*
const express = require("express");
const connectDB = require("./config/database");
const app = express();
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

*/
//////////////////////////////////////////////////////////

// write an api
/** 
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User=require("./models/user"); //get user model.

// app.post("/signup",(req,res)=>{
//     //creating a new instance of user model
//     const userObj=new User({
//         firstName:"Kanchana",
//         lastName:"Palavalasa",
//     emailId:"kanchanapalavalasa699@gmail.com",
// password:"ksjdfhwiufhwkjf"    }
// )});
// User.save(); 

app.post("/signup",async(req,res)=>{
    //creating a new instance of user model
    const user=new User({
        firstName:"Kanchana",
        lastName:"Palavalasa",
    emailId:"kanchanapalavalasa699@gmail.com",
password:"ksjdfhwiufhwkjf" 
   });
  try{
   await user.save(); 
   res.send("User Addes succesfully");
  }
  catch(err){
    res.status(400).send("Error is coming");
  }
});

//creating a new instance of user model
// const User=new User(userObj);


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

*/


////////////////////////////////////////////////////
// 7 diving into apis
/** 
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User=require("./models/user"); 
app.use(express.json());

app.post("/signup",async(req,res)=>{
console.log(req.body);
//creating a new instance of user model
const user=new User(req.body);

try{
await user.save(); 
res.send("User Addes succesfully");
}
catch(err){
    res.status(400).send("Error is coming");
}
});


app.get("/user",async(req,res)=>{
    
    const userEmail=req.body.emailId;
    
    try{
        const user=await User.findOne({emailId:userEmail}) ;//gives one document that is object not array.
        res.send(user);
        if(!user){
            res.status(400).send("User not found");
        }
        else{
            res.send(user);
        }
    // const users=await User.find({emailId:userEmail}) ;
    // if(users.length===0){
    //     res.status(404).send("User not found");
    // }
    // else{
    //     res.send(users);
    // }
    
    }
    catch(err){
        res.status(400).send("Error is coming");
    }
    });
    

app.get("/feed",async(req,res)=>{
        try{
            const users=await User.find({}); 
            res.send(users);
        }
        catch(err){
            res.status(400).send("Error is coming");
        }
        });
        app.delete("/user",async(req,res)=>{
            const userId=req.body.userId;
            try{
                // const user=await User.findByIdAndDelete({_id:userId}); 
                const user=await User.findByIdAndDelete(userId); 
                res.send("User deleted successfully");
            }
            catch(err){
                res.status(400).send("Error is coming");
            }
            });
            app.patch("/user",async(req,res)=>{
                const userId=req.body.userId;
                const data=req.body;
                                try{
                    
                    await User.findByIdAndUpdate({_id:userId},data); 
                    res.send("User updated successfully");
                }
                catch(err){
                    res.status(400).send("Error is coming");
                }
                });
                


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

    */

/////////////////////////////////////////////////////
// 8-data sanitization 

/** 
    const express = require("express");
    const connectDB = require("./config/database");
    const app = express();
    const User=require("./models/user"); 
    app.use(express.json());
    
    app.post("/signup",async(req,res)=>{
    console.log(req.body);
    //creating a new instance of user model
    const user=new User(req.body);
    
    try{
    await user.save(); 
    res.send("User Addes succesfully");
    }
    catch(err){
        res.status(400).send("Error is coming");
    }
    });
    
    
    app.get("/user",async(req,res)=>{
        
        const userEmail=req.body.emailId;
        
        try{
            const user=await User.findOne({emailId:userEmail}) ;//gives one document that is object not array.
            res.send(user);
            if(!user){
                res.status(400).send("User not found");
            }
            else{
                res.send(user);
            }
        
        
        }
        catch(err){
            res.status(400).send("Error is coming");
        }
        });
        
    
    app.get("/feed",async(req,res)=>{
            try{
                const users=await User.find({}); 
                res.send(users);
            }
            catch(err){
                res.status(400).send("Error is coming");
            }
            });
            app.delete("/user",async(req,res)=>{
                const userId=req.body.userId;
                try{
                    // const user=await User.findByIdAndDelete({_id:userId}); 
                    const user=await User.findByIdAndDelete(userId); 
                    res.send("User deleted successfully");
                }
                catch(err){
                    res.status(400).send("Error is coming");
                }
                });
// app.patch("/user",async(req,res)=>{
//                     const userId=req.body.userId;
//                     const data=req.body;
//                                     try{
                        
//                         await User.findByIdAndUpdate({_id:userId},data,{
//                             runValidators:true,
//                         }); 
//                         res.send("User updated successfully");
//                     }
//                     catch(err){
//                         res.status(400).send("UPDATE FAILED"+err.message);
//                     }
//                     });
                    
    
//api level validation
app.patch("/user/:userId",async(req,res)=>{
    const userId=req.params.userId;
    const data=req.body;
                    try{
                        const ALLOWED_UPDATES=["photoUrl","gender","age","skills"];
                        const isUpdateAllowed=Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k));
                        if(!isUpdateAllowed){
                            throw new Error("Update not allowed");
                        }       
                        if(data?.skills.length>10){
                            throw new Error("Skills cannot be more than 10");
                        } 
        await User.findByIdAndUpdate({_id:userId},data,{
            runValidators:true,
        }); 
        res.send("User updated successfully");
    }
    catch(err){
        res.status(400).send("UPDATE FAILED"+err.message);
    }
    });
    
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

        */

// 9---
// ***************************************
/** 

const express = require("express");
    const connectDB = require("./config/database");
    const app = express();
    const User=require("./models/user"); 
    const{validateSignUpData}=require("./utils/validation");
    const bcrypt=require("bcrypt");
    app.use(express.json());

    
    app.post("/signup",async(req,res)=>{
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

 app.post("/login",async(req,res)=>{
        // validate email and passowrd 
        
        try{
            
            const {emailId,password}=req.body;

            const user=await User.findOne({emailId:emailId});
            if(!user){
                throw new Error("Invalid credentials");
            }

            const isPasswordValid=await bcrypt.compare(password,user.password);

            if(!isPasswordValid){
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
    
app.get("/user",async(req,res)=>{
        
        const userEmail=req.body.emailId;
        
        try{
            const user=await User.findOne({emailId:userEmail}) ;//gives one document that is object not array.
            res.send(user);
            if(!user){
                res.status(400).send("User not found");
            }
            else{
                res.send(user);
            }
        
        
        }
        catch(err){
            res.status(400).send("Error is coming");
        }
        });
        
app.get("/feed",async(req,res)=>{
            try{
                const users=await User.find({}); 
                res.send(users);
            }
            catch(err){
                res.status(400).send("Error is coming");
            }
            });
app.delete("/user",async(req,res)=>{
                const userId=req.body.userId;
                try{
                    // const user=await User.findByIdAndDelete({_id:userId}); 
                    const user=await User.findByIdAndDelete(userId); 
                    res.send("User deleted successfully");
                }
                catch(err){
                    res.status(400).send("Error is coming");
                }
                });

                    
    
//api level validation
app.patch("/user/:userId",async(req,res)=>{
    const userId=req.params.userId;
    const data=req.body;
                    try{
                        const ALLOWED_UPDATES=["photoUrl","gender","age","skills"];
                        const isUpdateAllowed=Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k));
                        if(!isUpdateAllowed){
                            throw new Error("Update not allowed");
                        }       
                        if(data?.skills.length>10){
                            throw new Error("Skills cannot be more than 10");
                        } 
        await User.findByIdAndUpdate({_id:userId},data,{
            runValidators:true,
        }); 
        res.send("User updated successfully");
    }
    catch(err){
        res.status(400).send("UPDATE FAILED"+err.message);
    }
    });
    
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

        */
// *********************************************************************
// 10

/** 
        const express = require("express");
        const connectDB = require("./config/database");
        const app = express();
        const User=require("./models/user"); 
        const{validateSignUpData}=require("./utils/validation");
        const bcrypt=require("bcrypt");
        const cookieParser=require("cookie-parser");
        const jwt=require("jsonwebtoken");
        app.use(express.json());
        app.use(cookieParser());
    
        
        app.post("/signup",async(req,res)=>{
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
    
    app.post("/login",async(req,res)=>{
        try{
            const {emailId,password}=req.body;
    
                const user=await User.findOne({emailId:emailId});
                if(!user){
                    throw new Error("Invalid credentials");
                }
    
                const isPasswordValid=await bcrypt.compare(password,user.password);
    
                if(isPasswordValid){
                    //create a jwt token by hiding the data and giving a secret key
                    var token = jwt.sign({ _id:user._id }, 'DEV@TINDER$790');
                    console.log(token);
                    res.cookie("token",token);
                    
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
    app.get("/profile", async(req,res)=>{
        try{
        const cookies=req.cookies;
        const {token}=cookies;
        if(!token){
            throw new Error("Invalid token");
        }
        console.log(cookies);
        //validate token
        const decodedMessage= await jwt.verify(token, 'DEV@TINDER$790');
        console.log(decodedMessage);
        const {_id}=decodedMessage;
        console.log("Logged in user is :"+_id);
        const user=await User.findById(_id);
        if(!user){
            throw new Error("User does  not exist");
        }

        res.send(user);
        }catch(err){
            res.status(400).send("ERROR:"+err.message);
        } 
    })
    app.get("/user",async(req,res)=>{
            
            const userEmail=req.body.emailId;
            
            try{
                const user=await User.findOne({emailId:userEmail}) ;//gives one document that is object not array.
                res.send(user);
                if(!user){
                    res.status(400).send("User not found");
                }
                else{
                    res.send(user);
                }
            
            
            }
            catch(err){
                res.status(400).send("Error is coming");
            }
            });
            
    app.get("/feed",async(req,res)=>{
                try{
                    const users=await User.find({}); 
                    res.send(users);
                }
                catch(err){
                    res.status(400).send("Error is coming");
                }
                });
    app.delete("/user",async(req,res)=>{
                    const userId=req.body.userId;
                    try{
                        // const user=await User.findByIdAndDelete({_id:userId}); 
                        const user=await User.findByIdAndDelete(userId); 
                        res.send("User deleted successfully");
                    }
                    catch(err){
                        res.status(400).send("Error is coming");
                    }
                    });
    
                        
        
    //api level validation
    app.patch("/user/:userId",async(req,res)=>{
        const userId=req.params.userId;
        const data=req.body;
                        try{
                            const ALLOWED_UPDATES=["photoUrl","gender","age","skills"];
                            const isUpdateAllowed=Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k));
                            if(!isUpdateAllowed){
                                throw new Error("Update not allowed");
                            }       
                            if(data?.skills.length>10){
                                throw new Error("Skills cannot be more than 10");
                            } 
            await User.findByIdAndUpdate({_id:userId},data,{
                runValidators:true,
            }); 
            res.send("User updated successfully");
        }
        catch(err){
            res.status(400).send("UPDATE FAILED"+err.message);
        }
        });
        
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

*/


//creating a middleware 
/** 
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User=require("./models/user"); 
const{validateSignUpData}=require("./utils/validation");
const bcrypt=require("bcrypt");
const cookieParser=require("cookie-parser");
const jwt=require("jsonwebtoken");
const {userAuth} =require("./middlewares/auth")
app.use(express.json());
app.use(cookieParser());


app.post("/signup",async(req,res)=>{
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

app.post("/login",async(req,res)=>{
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
app.get("/profile",userAuth, async(req,res)=>{
try{
const user=req.user;

res.send(user);
}catch(err){
    res.status(400).send("ERROR:"+err.message);
} 
})

app.post("/sendConnectionRequest",userAuth,async(req,res)=>{
    try{
        const user=req.user;
        res.send(user);
    }
    catch(err){
        res.status(400).send("ERROR:"+err.message);    }

});

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

    */

// ************************************************************************************
// 11--

    const express = require("express");
    const connectDB = require("./config/database");
    const app = express();
    const User=require("./models/user"); 
    const{validateSignUpData}=require("./utils/validation");
    const bcrypt=require("bcrypt");
    const cookieParser=require("cookie-parser");
    const jwt=require("jsonwebtoken");
    const {userAuth} =require("./middlewares/auth")
    app.use(express.json());
    app.use(cookieParser());
    
    
    app.post("/signup",async(req,res)=>{
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
    
    app.post("/login",async(req,res)=>{
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
    app.get("/profile",userAuth, async(req,res)=>{
    try{
    const user=req.user;
    
    res.send(user);
    }catch(err){
        res.status(400).send("ERROR:"+err.message);
    } 
    })
    
    app.post("/sendConnectionRequest",userAuth,async(req,res)=>{
        try{
            const user=req.user;
            res.send(user);
        }
        catch(err){
            res.status(400).send("ERROR:"+err.message);    }
    
    });
    
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