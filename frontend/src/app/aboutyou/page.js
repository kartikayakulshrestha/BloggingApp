"use client"
import React, { useEffect } from 'react'

const page = () => {
  async function auth(){
    const res=await fetch("http://localhost:8000/verify")
    const re=await res.json()
    console.log(re)
    if(!re.message){
        window.location.href="http://localhost:3000/login"
        alert("kjvh")
    }
  }
  useEffect(()=>{
    auth()

  })
  return (
    <div>
      <h1>About you</h1>
    </div>
  )
}

export default page
