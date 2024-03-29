"use client"
import Navbar from "../components/Navbar"
import {useState,useEffect} from "react"
import "./login.css"
import Link from "next/link"
import { IoPersonAddSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation'
import axios from "axios"
const page = () => {
  
  const [first,setfirst]=useState("")
  const [email,setemail]=useState("")
  const [last,setlast]=useState("")
  const [pass,setpass]=useState("")
  const router = useRouter()


 
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handlesubmit = async (e) =>{
    console.log("esadf")
    if (validateEmail(email)){
    try{
      let da={
        email:email,
        password:pass,
        firstname:first,
        lastname:last 
    }
      let res = await axios.post("http://localhost:8000/signin",da,{withCredentials:true})
      let x= res.data
      window.location.href="http://localhost:3000/"
      alert("Created User",x)
     
    }catch(err){
      if(err){
        console.log("Error on Sign in",err)
        alert("Some Error Occured")
      }
    }
  }else{
    alert("email is not write formate")
  }
}
  return (
    <div>
        <Navbar />
        
        
            <div className="container d-flex justify-content-center align-items-center " style={{height:"90vh"}} >
                <div className="card" style={{height:"60vh",boxShadow:"5px 5px grey"}}>
                  <h1 className="d-flex justify-content-center mt-3"> Sign In</h1>
                <form onSubmit={handlesubmit}>
                    <div className=" d-flex justify-content-evenly mt-3" style={{margin:"10px 20px 10px 20px"}}>
                        <input type="text" className="form-control" placeholder="First Name" style={{margin:"0px 10px 0px 0px"}} onChange={(e)=>setfirst(e.target.value)} value={first} required></input>
                        <input type="text" className="form-control" placeholder="Last Name" style={{margin:"0px 0px 0px 10px"}} onChange={(e)=>setlast(e.target.value)} value={last} required></input>
                    </div>
                    <div className="d-flex justify-content-center mt-3"   style={{margin:"10px 20px 10px 20px"}}><input className="form-control" onChange={(e)=>setemail(e.target.value)} value={email} type="text" placeholder="Email" required></input></div>
                    <div className="d-flex justify-content-center mt-3"   style={{margin:"10px 20px 10px 20px"}}><input className="form-control" onChange={(e)=>setpass(e.target.value)} value={pass} type="password" placeholder="Password" required></input></div>
                    <div className="d-flex justify-content-center mt-3">
                    {/*<Link href="/">*/}<button type="submit" className="btn btn-dark mt-3">Sign In <IoPersonAddSharp /></button>{/*</Link>*/}
                    </div>


                </form>
                <hr />
                <p  style={{textAlign:"center"}}>Already have an account?  <Link href="/login">Let's Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default page
