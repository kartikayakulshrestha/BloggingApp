
var mongoose = require("mongoose")

// mongoose usage
mongoose.connect("mongodb://localhost:27017/blogapp")

const UserSchema= mongoose.Schema({
    firstname:{
        required:true,
        type:String
    },
    lastname:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
    blogs:Array,
    likes:Array,
    comments:[{
        text:String,
        blogidC:String
    }],
    tokens:{
        token:{
            type:String,
        }
    }
  },{timestamps: true})

const User = new mongoose.model("User",UserSchema)

module.exports = User