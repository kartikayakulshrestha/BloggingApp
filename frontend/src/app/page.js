"use client"
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
export default function Home() {
  return (
   <>
   <Navbar />
   <div className="container">
      
      <div className="row mt-3">
        <div className="col-sm-3 bg-primary">
          <h1>setting section</h1>
        </div>
        <div className="col-9">
          
            
              <Blogs />
           
        </div>
      </div>
   </div>
   
   </>
  );
}
