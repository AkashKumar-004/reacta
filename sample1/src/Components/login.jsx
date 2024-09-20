import React, { useRef } from 'react'
import { Minus } from 'lucide-react'
import {useDispatch} from 'react-redux'
import { cancel } from '../redux/UserSlice'
const Login=()=>{
    let can=null
    const nameref=useRef(null)
    const dispatch=useDispatch()
    const  handle=(e)=>{
      //e.preventDefault()
      
    }
    const cancels=()=>{
      can=false
      dispatch(cancel({
        minus:can
      }))
    }
    return(
        <>
        <div className="h-screen w-screen flex items-center absolute justify-center z-40 bg-black/30">
            <div className="h-[50%] w-[25%] flex z-50 bg-black/40 flex-col rounded-md">
            <div className="h-[10%] flex items-end justify-end w-[95%]"><Minus className="border-2 border-black rounded-xl size-6 bg-slate-300/15" onClick={cancels} /></div>
                      <form action="submit" className="gap-5 flex justify-center items-center flex-col h-[80%] w-full" onSubmit={handle}>
                          <div className="flex text-white/70 text-2xl">Login</div>
                            <input type="text" ref={nameref} placeholder='name' className=' p-3 text-black  bg-white/50 rounded-md w-[50%] shadow-lg outline-none active:outline-none ' />
                            <input type="name"  placeholder='email' className=' p-3 text-black bg-white/50 rounded-md  w-[50%] shadow-lg outline-none ' />
                            <input type="phone"  placeholder='phone' className='  p-3 text-black bg-white/50 rounded-md w-[50%] shadow-lg outline-none ' />
                            <button className=' text-black bg-white/50 rounded-md size-1/4 p-1  shadow-xl' type="submit">submit</button>
                          </form> 
              {/* </div> */}
            </div>
          </div>
        </>
    )
}
export default Login
