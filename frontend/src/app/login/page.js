"use client"
import Navbar from "../components/Navbar"
import {useState} from "react"
//import "./login.css"
import Link from "next/link"
import { IoPersonAddSharp } from "react-icons/io5";
const page = () => {
  return (
    <div>
        <Navbar />
        
            <div className="container d-flex justify-content-center align-items-center " style={{height:"90vh"}} >
                <div className="card" style={{height:"50vh",width:"40vw",boxShadow:"5px 5px grey"}}>
                  <h1 className="d-flex justify-content-center mt-3"> Login </h1>
                <form>
                    
                    <div className="d-flex justify-content-center mt-3" style={{margin:"10px 20px 10px 20px"}}><input className="form-control" type="text" placeholder="Email"></input></div>
                    <div className="d-flex justify-content-center mt-3" style={{margin:"10px 20px 10px 20px"}}><input className="form-control" type="password" placeholder="Password"></input></div>
                    <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-dark mt-3">Login <IoPersonAddSharp /></button>
                   
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
