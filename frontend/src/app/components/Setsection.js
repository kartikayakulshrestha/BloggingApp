import React, { useState , useEffect } from 'react'
import axios from 'axios'


const Setsection = () => {
    const [name,setname]=useState("")

    const ramlal = async ()=>{
        const res2= await axios.get("http://localhost:8000/",{withCredentials:true}).then(res=>res.data)
        if(res2.name){
            setname(res2.name)
            
        }
    }
    
    useEffect(()=>{
        ramlal()
        ,[]})

  return (
    <div>
       <h3>{name?`Hello!!! ${name}`:null}</h3>
       
    </div>
  )
}

export default Setsection
