 

/** 
 const mongoose=require("mongoose");
//this is not good way to connect database or cluuster
// mongoose.connect("");


//instead of that wrap inside async function
//by this code we does not connect with database
//in app.js by using require we refer database.then only we connect databse.
const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://namastedev:UFflWnGcScGB63Lx@nmastenose.af3s1.mongodb.net/");
};

connectDB()
.then(()=>{
    console.log("Database connection succesful");
})
.catch((err)=>{
   console.log("Database cannot be connected");

});

*/
//////////////////////////////////////////
const mongoose=require("mongoose");
const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://namastedev:UFflWnGcScGB63Lx@nmastenose.af3s1.mongodb.net/devTinder");
};

module.exports=connectDB;

