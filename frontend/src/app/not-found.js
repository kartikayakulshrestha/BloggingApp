import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <h2>Mai nahi sahta bhai!!! 404 error</h2>
      <br />
      <Link href="/">Return Home</Link>
    </div>
  )
}