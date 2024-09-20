import { useState } from "react"
import NavBar from "../Components/NavBar"
import { useSelector } from "react-redux"
import { canceluser } from "../redux/UserSlice"

function Contact() {
  const[visible,setvisible]=useState(false)
  const[data,setdata]=useState({
    email:'',
    password:''
  })
  const minus=useSelector(canceluser)
  console.log(minus)
  return (
    <>
      <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
        <button  className="bg-red-500 p-3 text-white w-32 rounded-sm"> Delete </button>
      <div>{data.minus||"hi"}</div>
      </div>
    </>
  )
}
export default Contact
