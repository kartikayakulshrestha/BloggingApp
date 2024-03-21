"use client"
import Navbar from "../components/Navbar"
import { useState} from "react"
import "./login.css"
import Link from "next/link"
import { IoPersonAddSharp } from "react-icons/io5";
import {useRouter} from "next/navigation";
import axios from "axios"

const page = () => {
  
  
  const [email,setemail]=useState("")
  const router=useRouter()
  const [data,setData]=useState("firsst")
  const [pass,setpass]=useState("")
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  
  
  const handleSumbit = async ()=>{
    
    console.log(email,pass)
  
      try{
        
      const response = await axios.post("http://localhost:8000/login",{email:email,password:pass},{withCredentials:true});
      
      console.log(response)
      window.location.href="http://localhost:3000/"
      }catch(err){
        console.log("error in Login",err)
        
      }
    
  }


  return (
    <div>
        <Navbar />
          
            <div className="container d-flex justify-content-center align-items-center " style={{height:"90vh"}} >
                <div className="card cardd" style={{height:"50vh",boxShadow:"5px 5px grey"}}>
                  <h1 className="d-flex justify-content-center mt-3"> Login </h1>
                <form onSubmit={handleSumbit}>
                    
                    <div className="d-flex justify-content-center mt-3" style={{margin:"10px 20px 10px 20px"}}><input className="form-control" onChange={(e)=>setemail(e.target.value)} value={email} type="text" placeholder="Email" required></input></div>
                    <div className="d-flex justify-content-center mt-3" style={{margin:"10px 20px 10px 20px"}}><input className="form-control"  onChange={(e)=>setpass(e.target.value)} value={pass} type="password" placeholder="Password" required></input></div>
                    <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-dark mt-3" type="submit" >Login <IoPersonAddSharp /></button>
                   
                    </div>
                  

                </form>
                
                    <hr />
                    
                    <p style={{textAlign:"center"}}>Not have an accont? <Link href="/signin">Create an Account</Link></p>
            </div>
        </div>
    </div>
  )
}

export default page
