"use client"
import Navbar from "../components/Navbar"
import {useEffect, useState} from "react"
import "./login.css"
import Link from "next/link"
import { IoPersonAddSharp } from "react-icons/io5";
import {useRouter} from "next/navigation";
import axios from "axios"

const page = () => {
  const [wi,swi]=useState(window.innerWidth)
  const [l,sl]=useState(window.innerWidth>950?"40vw":"95vw")
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
  function xx(){
    swi(Number(window.innerWidth))
    if(wi>950){
      sl("40vw")
    }else{
      sl("95vw")
    }
  }
  useEffect(()=>{
    
    window.addEventListener("resize",xx)
    return ()=>{window.removeEventListener("resize",xx);}
  }
  )
  const handleSumbit = async ()=>{
    console.log("handle")
    console.log(email,pass)
  
      try{
        
      const response = await axios.post("http://localhost:8000/login",{email:email,password:pass},{withCredentials:true});
      
      console.log(response)
      alert(String(response.data.mes))
      }catch(err){
        console.log("error in Login",err)
        
      }
    
  }

  /*
  const handleSumbit = async ()=>{
    
      
        
    
    if(validateEmail(email)){
      try{
        
        
      let x= await axios.post("http://localhost:8000/user/login",{email,password:pass},{withCredentials:true})
      console.log(x)
      
        if(x.email && x.password){
          window.location.href="http://localhost:3000/"
          alert("logged In ")
          
        }else if(x.email){

          alert("Wrong Password")
          
        }
    
    
      
    }catch(err){
      
      window.location.href="http://localhost:3000/signin"
      alert("Please Sign in you don't have a account")
      console.log("error in Login")
      
    }
    }else{
      alert("Wrong Email")
    }
  
*/
  return (
    <div>
        <Navbar />
          
            <div className="container d-flex justify-content-center align-items-center " style={{height:"90vh"}} >
                <div className="card cardd" style={{height:"50vh",width:l,boxShadow:"5px 5px grey"}}>
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
