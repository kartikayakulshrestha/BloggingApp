import React from 'react'
import axios from 'axios'
import Link from "next/link"
const Navbar = () => {
    const logout=async ()=>{
        try{
            
        const remove= await axios.get("http://localhost:8000/logout",{withCredentials:true})
        window.location.href="http://localhost:3000/"
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">BlogMe</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link link-secondary link-offset-2 link-underline-opacity-0" aria-current="page" href="/">Home</a>
                </li>
                <Link href="/addblog" className="nav-item link-secondary link-offset-2 link-underline-opacity-0 ">
                
                    <span className="nav-link">Add Blog</span>
                
                </Link>
                
               {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
            <li className="nav-item">
                <Link className="nav-link" href="/aboutyou">About You</Link>
            </li>*/}
            </ul>
            {/*
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>*/}
                    
                    <Link href="/login"><button className='btn btn-success loginbutton' style={{marginLeft:"4px"}}>Login /Sign </button></Link>
                    <button className='btn btn-outline-primary loginbutton' style={{marginLeft:"4px"}} onClick={logout}>LogOut </button>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
