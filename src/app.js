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


const express=require("express");

const app=express();

// this will handle red like /user, /user/xyz,/user/1
// app.use("/user",(req,res)=>{
//     res.send("HAHAHAHHHA");
// });


//complex rotes examples

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
// (userId=101)=>thses are query params.
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