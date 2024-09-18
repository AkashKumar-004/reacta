import { User2 } from "lucide-react";
import { useState } from "react";
import{Link,NavLink} from "react-router-dom"
const NavBar=()=>{
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
    const [visible,setvisible]=useState(false)
    return(
        <>
        <div className="bg-red-300 flex h-[3.5rem] w-screen justify-center items-center">
            <div className=" w-[65%] bg-red-300  flex justify-start items-center ">
                <div className="w-[80%] flex items-center px-6">WEBSITE</div>
            </div>
            <div className="bg-red-300 flex  flex-row w-[35%] items-center justify-center gap-20">
            <ul className="flex flex-row justify-center gap-7">{ 
            NavLinks.map((navdata, index)=>(
                                    <NavLink key={index} to={navdata.path}>
                                        <div className='font-bold text-xl text-white'>{navdata.title}</div>
                                    </NavLink>
                                ))
            }
            </ul>
            <User2 className='h-9 w-10 text-white rounded-full border-2 border-white hover:bg-white  hover:border-purple-500 hover:text-purple-500' onClick={() => setvisible(true)} />
            </div>
        </div>
        {
      visible && (
        <>
          <div className="h-screen w-screen  top-0 left-0 bg-slate-500 flex justify-center items-center z-50">
            <div className="h-[40%] w-[20%] bg-white  flex">
                <div className=" flex flex-col w-full h-full">
                  <div className="flex justify-center flex-col items-end h-[20%] bg-blue-100">
                    <div className="w-[90%] flex"> Login</div>
                    </div>
                  <form action="" className="flex flex-col justify-center items-center gap-4 h-[60%]">
                  <input type="text" placeholder="email " className="text-center" id="email"/>
                  <input type="number" placeholder="Password" className="text-center" id="password"/>
                  </form>
                  <div className="flex justify-center items-center h-[20%] font-bold bg-slate-400"><button className="bg-red-600 w-[50%]" onClick={()=>(setvisible(!visible))}>Close    </button></div>
                </div>
            </div>
          </div>
        </>
        )
        }
        </>
    )
}
export default NavBar;