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
