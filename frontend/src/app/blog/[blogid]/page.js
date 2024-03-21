"use client"
import React from 'react'
import Navbar from '../../components/Navbar'
import Link from "next/link"
import {useState} from "react"
import { HiUserCircle } from "react-icons/hi2";
import { FcLike } from "react-icons/fc";
import { LiaHashtagSolid } from "react-icons/lia";
import { BiArrowBack } from "react-icons/bi";
import "./pagess.css"
import { MdDelete } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";



const page = ({params}) => {
  
  const [data,setdata]=useState("")
  const [url,seturl]=useState("")
  const ramlaal = async ()=>{
    const res= await fetch(`http://localhost:8000/blogs/${params.blogid}`)
    const ress= await res.json()
    
    setdata(ress)
    
}
if (data===""){
    ramlaal()
}
  const handleDelete = async (e)=>{
    e.preventDefault()
    try{
      window.location.href="http://localhost:3000/"
      const res = await fetch(`http://localhost:8000/blog/delete/${params.blogid}`,
      {method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id:params.blogid
      })}
    );
    console.log("hee:",res)
    
  }catch(err){
      console.log("Error in deleting")
    }
        
      
   
  }
  
  return (
    <div>
      <Navbar />
      <div  style={{fontFamily:"cursive"}}>
      {data!=="" && data.map((e)=>{
        return <div key={e._id}>
        <div className='container'>
        <div className='row'>

          <div className='col-8'>
        <Link href="/" style={{color:"black"}} >
        <BiArrowBack size={40} className='mt-5 '></BiArrowBack>
        </Link>
        </div>
        <div className='col-4 d-flex align-items-end justify-content-end'>
        <Link href={`/update/${e._id}`}><button className='btn btn-primary mr-4 d-inline-flex' ><MdTipsAndUpdates size={20}/>Update</button></Link>
        <button className='btn btn-danger d-flex float-end' onClick={(e)=>{if(e.type==="click"){e.preventDefault();handleDelete(e)}}} ><MdDelete size={20}/>  Delete</button>
        </div>
        </div>
        

            <h1 className='mt-1'>{e.title}</h1>
        Author:{e.author?e.author:"UNKNOWN"}<br />
        
       
        
        
        
        <img src={e.featured_image} height={600} className="mt-3"  style={{width:"100%",boxShadow:"5px 5px grey",borderRadius:"10px"}}/>
        <br /><br />
        <div className="row">
        <div className='col-6'>
        
        <FcLike size={35}/> <sup>{e.likes}</sup> Likes <button style={{marginLeft:"5px"}} onClick={(e)=>{e.type==="click"?sharebutton(e):""}}><FiShare2 size={25} onClick={(e)=>{}}/>Share</button>
        
        <br />
        <br />
        <span style={{fontSize:20}}>
          <LiaHashtagSolid size={25} rotate={90}/>Tags:
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {e.tags!==undefined?e.tags.map((tage)=>{
          return <div key={e.tags.indexOf(tage)}> <div style={{border:"1px solid black",backgroundColor:"lightgray",borderRadius:"50px"}} className='sss'>#{tage}</div>  </div>
        }):"NO TAGS"}
        </div>
        </span>
        
        </div>
        <div className='col-6'><p style={{textAlign:"right"}} >Date:{String(e.published_date)}</p>
        <p style={{textAlign:"right"}} >Time:{String(e.published_time).slice(0,5)}{Number((e.published_time).slice(0,2))>=12?"pm":"am"}</p></div>
        
        </div>
        <hr className='mt-4'/>
        <article className='mt-2' style={{fontSize:25}} ><pre style={{textWrap:"wrap",fontFamily:"cursive"}}>{e.desc.trim()}</pre></article>

        
        <br/><br/>
        <hr />
        <h5>Comments:</h5>
        {e.comments!==null && e.comments.map((ee)=>{
          return <>
          <h4>{ee.text}</h4>
          <HiUserCircle size={27}/>  {ee.user}
          
          </>
        })}
        
        </div>
        
        </div>
      })}
      </div>
    </div>
  )
}

export default page
