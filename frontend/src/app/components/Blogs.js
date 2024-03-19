"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import "../globals.css"
import { FcLike } from "react-icons/fc";
import { MdOutlineComment } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";
import axios from "axios";


const Blogs = () => {
    const [data,setdata]=useState("")
    const [name,setname]=useState("")
    const ramlaal = async ()=>{
        const res= await axios.get("http://localhost:8000/blogs")
        const res2= await axios.get("http://localhost:8000/",{withCredentials:true}).then(res=>res.data)
        const ress= res.data
        console.log(res2.name)
        if(res2.name){
            setname(res2.name)
        }
        
        setdata(ress)
    }
    
    useEffect(()=>{
        ramlaal();
    },[])
  return (
    <div>
        <h3>{name?`Hello!!! ${name}`:null}</h3>
        <h1 className="mb-5" style={{display:"inline"}}>Blogs Recents</h1> <h6 style={{display:"inline"}}>({data.length})</h6>
        <div className="container mt-4">
    {
        data!==""  && 
        data.map((e)=>{
            return <div key={e._id}>
                <Link href={`blog/${e._id}`} className="link-secondary link-offset-2 link-underline-opacity-0 ">
                <div className="card mb-3" style={{boxShadow:"4px 4px darkgreen"}} >
            <div className="row g-0">
                <div className="col-md-4">
                
                    <img src={e.featured_image} style={{height:"100%"}}className="img-fluid fff rounded-start" alt="..." />
                </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{e.title}</h5> - <small>{e.author}</small>
                
                <p className="card-text">{String(e.desc).slice(0,100)}...</p>
                <div className="row d-flex align-items-end">
                    <div className="col-sm-6">
                    <p className="card-text"><small className="text-body-secondary">{String(e.published_date)}<br />{String(e.published_time).slice(0,5)}{Number((e.published_time).slice(0,2))>=12?"pm":"am"}</small></p>

                    </div>
                    <div className="col-sm-6 d-flex flex-row-reverse  align-items-end">
                        
                            <sup>{e.likes}</sup><FcLike size={30} />
                            <sup>{e.comments.length}</sup><MdOutlineComment size={30} />
                        
                    </div>
                    
                </div>
            </div>
        </div>
            
       </div>
    
    </div>

    </Link>
            </div>
        })
        
    }
      </div>
    </div>
  )
}

export default Blogs