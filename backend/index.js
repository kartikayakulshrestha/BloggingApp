const express= require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors=require("cors")
const app = express();
const compression = require('compression');

//essentials 
app.use(bodyParser.urlencoded({ limit:"50mb", extended: false }));
app.use(bodyParser.json({limit: "50mb" }));
app.use(cors())
app.use(compression())


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
    tags:Array
  })

const Blog = new mongoose.model("Blog",blogSchema)



//function for routes
async function findAllBlogs(){
    let res = Blog.find()
    return res
}
async function blogbyid(id){
    let res = Blog.find({_id:id})
    return res
}

//routes here

app.get("/blogs", async (req,res)=>{
    try{
    
    let blogscollections = await findAllBlogs()
    res.json(blogscollections)
    }catch(err){
        err?console.log("errorr in blogscollection",err):console.log("working /blogs")
    }
})

app.get("/blogs/:id",async (req,res)=>{
    try{
        
        let blogById= await blogbyid(req.params.id);
        
        res.send(blogById)
    }catch(err){
        if (err){
            console.log("error : blog/:id problem",err)
        }
    }
})

app.delete("/blog/delete/:id",async (req,res)=>{
    try{
        console.log(req.params.id)
        const x =await Blog.deleteOne({_id:req.params.id})
        res.redirect("http://localhost:3000/")
    }catch(err){
        if(err){
            console.log("error:delete")
        }
    }
})

app.post("/blogs/add",async (req,res)=>{
    const x=new Date
    console.log(x.toDateString(),x.toTimeString())
    let addblog = new Blog({
        title:req.body.title,
        desc:req.body.desc,
        featured_image:req.body.img,
        author:req.body.author,
        published_date:x.toDateString(),
        published_time:x.toTimeString(),
        likes:0,
        tags:req.body.tags

    })
    let result= await addblog.save()
    res.send(result)
})


app.post("/update/:id",async (req,res)=>{
    try{
        const x=new Date
        const ress= await Blog.updateOne({_id:req.params.id},{
            title:req.body.title+("(Edited)"),
            desc:req.body.desc,
            featured_image:req.body.img,
            author:req.body.author,
            published_date:x.toDateString(),
            published_time:x.toTimeString(),
            likes:0,
            tags:req.body.tags
        })
        res.json(ress)
    }catch(err){
        console.log("error in updation")
    }
})

// server connection
app.listen(8000,(err)=>{
    if(err){
        console.log("problem")
    }else{
        console.log("server is on.... http://localhost:8000/")
    }
})