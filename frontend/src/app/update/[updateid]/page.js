"use client"
import {useEffect, useState} from "react"
import Navbar from "../../components/Navbar" 
import { LiaHashtagSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { TbUpload } from "react-icons/tb";
import "./update.css"

const page = ({params}) => {
    
const [data,setdata]=useState("")
const [title,settitle]=useState("")
const [desc,setdesc]=useState("")
const [image,setimage]=useState("")
const [tags,settags]=useState([])
const [tag,settag]=useState("")
const [author,setauthor]=useState("")


const ramlaal = async ()=>{
const res= await fetch(`http://localhost:8000/blogs/${params.updateid}`)
const ress= await res.json()
setdata(ress)

settitle(ress[0].title)
setdesc(ress[0].desc)
setimage(ress[0].featured_image)
settags(ress[0].tags)
setauthor(ress[0].author)
}
useEffect(()=>{
  ramlaal()
},[])


function handleOnchange(e){
    e.preventDefault()
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      
      setimage(reader.result)

    }
    reader.onerror=(err)=>{
      console.log(err)
    }
  }

 async function handleSubmit(e){
    e.preventDefault()
    
    try{
      const response=await fetch(`http://localhost:8000/update/${params.updateid}`,{method:"Post",
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
  
  window.location.href="http://localhost:3000/"
  
    }catch(err){
      if(err){
        console.log("err in submit update")
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
        <h1>Update Blog</h1><p>Become a Blogger with us</p>
        
        
        <h1><input type="text" placeholder="Title Of Article" required className="titleinput" value={title} onChange={(e)=>{settitle(e.target.value)}} ></input></h1>
        
       
        <div className="row mt-3">
          <div className="col-lg-4">

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
          <input type="text" placeholder="imageUrl" className="urlimg" onChange={(e)=>setimage(e.target.value)} value={image} ></input>
          <br /><br/>

          <div className="boxtag mb-2">

            {tags.length!==0 && tags.map((e)=>{
                return <div className="some mt-2" key={tags.indexOf(e)}><LiaHashtagSolid size={30}  />{e} <RxCross2 onClick={()=>{removetag(e)}}/>   </div>
            })}
          </div>
          <input type="text" placeholder="Tags"  className="taginput float-end"  value={tag} onChange={(e)=>{settag(e.target.value)}} onKeyDown={(e)=>{if(String(e.code)==="Enter"){handleenter(e);settag("");}}}></input>

        
          
        
        

          
          </div>



          <div className="col-lg-8">
          <input type="text" placeholder="Author Name" required className="authorinput float-end"  value={author} onChange={(e)=>setauthor(e.target.value)}></input>

          <br />
          <br />
          <textarea type="text" placeholder="Write your Blog here" required className="bloginput mt-3"  onChange={(e)=>setdesc(e.target.value)} value={desc}></textarea>
          
          </div>
        </div>
        
        
        <button type="submit" className="btn btn-success float-end" onClick={(e)=>{if(String(e.type)==="click"){handleSubmit(e)}}} href="/">Submit</button>
        
    </div>
    </div>
  )
}

export default page
