"use client"
import Navbar from "../components/Navbar";
import {useState} from "react";
import "./addblog.css"
import { LiaHashtagSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { TbUpload } from "react-icons/tb";



const AddBlog = () => {
  const [title,settitle]=useState("")
  const [desc,setdesc]=useState("")
  const [image,setimage]=useState("")
  const [tags,settags]=useState([])
  const [tag,settag]=useState("")
  const [author,setauthor]=useState("")
  

  function handleOnchange(e){
    e.preventDefault()
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      console.log(reader.result)
      setimage(reader.result)

    }
    reader.onerror=(err)=>{
      console.log(err)
    }
  }

 async function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    try{
      const response=await fetch("http://localhost:8000/blogs/add",{method:"Post",
    headers:{
      "Content-Type":"application/json"
    },body:JSON.stringify({
      title:title,
      desc:desc,
      author:author,
      img:image,
      tags:tags
    })
    
  })
  console.log(response)
  
    }catch(err){
      if(err){
        console.log("err in submit")
      }
    }

    
  }
  function handleenter(e) {
    e.preventDefault();
    const x= tags
    x.push(tag)
    settags(x)
    
  }
  function removetag(vale){
    
    const ta=tags.filter(tag=>tag!==vale)
    
    settags(ta)
  }

  
  return (
    <div>
        <Navbar />
        <div className="container mt-5">
        <h1>Write your own Blog</h1><p>Become a Blogger with us</p>
        
        
        <h1><input type="text" placeholder="Title Of Article" required className="titleinput" onChange={(e)=>{settitle(e.target.value)}} ></input></h1>
        
       
        <div className="row mt-3">
          <div className="col-4">

          <div className="boximg mt-5" >
              
              <div className="text-center">
                {image===""?<>Drop image here
                <br></br>
                <TbUpload size={92} opacity={0.3}/>
                <input type="file" accept="image/*" onChange={handleOnchange} ></input></>:<img src={image} className="imagesizeh"/>}
                
              </div>
          </div>
            <br />
            <span className="">or</span>
            <br />
          <p>(You can also paste the url of the image):</p>
          <input type="text" placeholder="imageUrl" className="urlimg" onChange={(e)=>setimage(e.target.value)}></input>
          <br /><br/>

          <div className="boxtag mb-2">

            {tags.length!==0 && tags.map((e)=>{
                return <div className="some mt-2"><LiaHashtagSolid size={30} />{e} <RxCross2 onClick={()=>{removetag(e)}}/>   </div>
            })}
          </div>
          <input type="text" placeholder="Tags"  className="taginput float-end"  value={tag} onChange={(e)=>{settag(e.target.value)}} onKeyDown={(e)=>{if(String(e.code)==="Enter"){handleenter(e);settag("");console.log(tag)}}}></input>

        
          
        
        

          
          </div>



          <div className="col-8">
          <input type="text" placeholder="Author Name" required className="authorinput float-end"  onChange={(e)=>setauthor(e.target.value)}></input>

          <br />
          <br />
          <textarea type="text" placeholder="Write your Blog here" required className="bloginput mt-3"  onChange={(e)=>setdesc(e.target.value)}></textarea>
          
          </div>
        </div>
        
        
        <button type="submit" className="btn btn-success float-end" onClick={(e)=>{if(String(e.type)==="click"){handleSubmit(e)}}} href="/">Submit</button>
        
    </div>
    </div>
  )
}

export default AddBlog
