"use client"
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import Setsection from "./components/Setsection";
import "./globals.css"
export default function Home() {
  return (
   <>
   <Navbar />
   <div className="container">
      
      <div className="row mt-3">
        <div className="col-sm-3">
          <Setsection />
        </div>
        <div className="col-9 hellow">
          
            
              <Blogs />
           
        </div>
      </div>
   </div>
   
   </>
  );
}
