import { useState } from "react"
import NavBar from "../Components/NavBar"

function Contact() {
  const[visible,setvisible]=useState(false)
  const[data,setdata]=useState({
    email:'',
    password:''
  })
  return (
    <>
 
      <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
        <button  className="bg-red-500 p-3 text-white w-32 rounded-sm"> Delete </button>
      </div>
    </>
  )
}
export default Contact
