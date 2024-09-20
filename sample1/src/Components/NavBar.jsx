import { Minus, User2 } from "lucide-react";
import { useRef, useState } from "react";
import{Link,NavLink} from "react-router-dom"
import Login from "./login";
const NavBar=()=>{
  
  const emailref=useRef(null)
  const passwordref=useRef(null)
  const [userdata,setuserdata]=useState({
    email:'',
    password:''
  })
  const handlestate=(e)=>{
    setuserdata({...userdata,[e.target.id]:e.target.value})
  }
    const NavLinks=[{
        title:"Page",
        path:"/"
    },
    {
        title:"Projects",
        path:"/Project"
    },
    {
        title:"contact",
        path:"/contact"
    }
    ]
    const handle=(e)=>{
      e.preventDefault()
      console.log(userdata)
       console.log(emailref.current.value,"  ",passwordref.current.value)
    }
    const [visible,setvisible]=useState(false)
    const refhandle=(e)=>{
      e.preventDefault()
      const a=name.current.value
      console.log(a)
    }
    return(
        <>
        <div className="bg-white flex h-[3.5rem] w-screen justify-center items-center shadow-md">
            <div className=" w-[65%] bg-white  flex justify-start items-center shadow-2xl">
                <div className="w-[80%] flex items-center px-6">WEBSITE</div>
            </div>
            <div className="bg-white flex  flex-row w-[35%] items-center justify-center gap-20">
            <ul className="flex flex-row justify-center gap-7">{ 
            NavLinks.map((navdata, index)=>(
                                    <NavLink key={index} to={navdata.path}>
                                        <div className='font-bold text-xl text-zinc-950'>{navdata.title}</div>
                                    </NavLink>
                                ))
            }
            </ul>
            <User2 className='h-9 w-10 text-zinc-950 rounded-full border-2 border-white hover:bg-white  hover:border-zinc-950 hover:text-zin' onClick={() => setvisible(true)} />
            </div>
        </div>
        {
      visible && (
        <>
          <div className="h-screen w-screen flex items-center absolute justify-center z-40 bg-black/30">
            <div className="h-[50%] w-[25%] flex z-50 bg-black/40 flex-col rounded-md">
            <div className="h-[10%] flex items-end justify-end w-[95%]"><Minus className="border-2 border-black rounded-xl size-6 bg-slate-300/15" onClick={()=>{setvisible(!visible)}}/></div>
                      <form action="submit" className="gap-5 flex justify-center items-center flex-col h-[80%] w-full" >
                          <div className="flex text-white/70 text-2xl">Login</div>
                            <input type="text" placeholder='name' className=' p-3 text-black  bg-white/50 rounded-md w-[50%] shadow-lg outline-none active:outline-none ' />
                            <input type="name"  placeholder='email' className=' p-3 text-black bg-white/50 rounded-md  w-[50%] shadow-lg outline-none ' />
                            <input type="phone"  placeholder='phone' className='  p-3 text-black bg-white/50 rounded-md w-[50%] shadow-lg outline-none ' />
                            <button className=' text-black bg-white/50 rounded-md size-1/4 p-1  shadow-xl' type="submitz">submit</button>
                          </form> 
            </div>
          </div>
        </>
        )
        }
        </>
    )
}
export default NavBar;