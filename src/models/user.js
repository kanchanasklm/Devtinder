/** 
const mongoose=require("mongoose");

//create schema
const userSchema=mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }
});

//create model
// const User=mongoose.model("User",userSchema);
// module.exports=User;

//instead of above we are also write like below
module.exports=mongoose.model("User",userSchema);
*/


const mongoose=require("mongoose");
const validator=require("validator");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const userSchema=mongoose.Schema(
    {
    firstName:{
        type:String,
        required:true,
        minLength:5,
        maxLength:50
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address:"+value)
            }
        }

    },
    password:{
        type:String,
        required:true,
        
    },
    age:{
        type:Number,
        min:18,
        max:50
    },
    gender:{
        type:String,
        enum:{
            values:["male","female","other"],
message:`{VALUE} is not valid gender type`
        },
        // validate(value){
        //     if(!["male","female","others"].includes(value)){
        //         throw new Error("Gender data is not valid");
        //     }
        // }

    },
    photoUrl:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid Photo Url:"+value)
            }
        }
    },
    about:{
        type:String,
    default:"This is a defau;t about of the user!"    
},
    skills:{
        type:[String]
    },
}, 
    {
        timestamps:true
    }
);
//creating index

userSchema.index({firstName:1,lastName:1});
userSchema.index({gender:1}); 

userSchema.methods.getJWT=async function(){
    const user=this;
    const token=await jwt.sign({ _id:user._id }, 'DEV@TINDER$790',{expiresIn:"7d"});
    return token;
};

userSchema.methods.validatePassword=async function(passwordInputByUser){
    const user=this;
    const passwordHash=user.password;
    const isPasswordValid=await bcrypt.compare(passwordInputByUser,passwordHash);
    return isPasswordValid;
}
module.exports=mongoose.model("User",userSchema);

