
var mongoose = require("mongoose")

// mongoose usage
mongoose.connect("mongodb://localhost:27017/blogapp")

const blogSchema= mongoose.Schema({
    title: String,
    desc: String,
    author: String,
    published_date: String,
    published_time: String,
    comments: [
      {
        user: String,
        text: String
      }],
    likes: Number,
    
    read_time_minutes: Number,
    featured_image: String,
    tags:Array,
    time:Number
  },{timestamps: true})

const Blog = new mongoose.model("Blog",blogSchema)

module.exports = Blog