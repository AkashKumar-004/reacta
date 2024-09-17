import React from 'react'
import Navbar from './components/NavBar'
const App = () => {

  const data={
    "name" : "akash",
    "classa" :" IT_A"
  }
    return (
      <>
      <div className="h-lvh w-lvw">
      <div className="h-[5%]">
        <Navbar data={data}/>
      </div>
      <div className="bg-gradient-to-r from-slate-500 to-slate-950  flex justify-center items-center h-[95%]">
        <div className="bg-gradient-to-r from-slate-500 to-slate-950 h-3/5 w-1/3 flex justify-center flex-col items-center rounded-md shadow-xl gap-3">
        <form action="submit" className="gap-5 flex justify-center items-center flex-col w-full">
        <div className="flex justify-center items-center text-white text-2xl">Login form</div>
          <input type="text" placeholder='name' className=' p-3 bg-gradient-to-r from-slate-900 to-slate-500  w-[50%] shadow-lg outline-none active:outline-none focus:border-b-2  hover:border-black' />
          <input type="name" placeholder='email' className=' p-3 bg-gradient-to-r from-slate-900 to-slate-500  w-[50%] shadow-lg outline-none focus:border-b-2 hover:border-black' />
          <input type="number" placeholder='phone' className=' p-3 bg-gradient-to-r from-slate-900 to-slate-500  w-[50%] shadow-lg outline-none focus:border-b-2 hover:border-black' />
          <button type="button" className='bg-gradient-to-r from-slate-500 to-slate-950 rounded-md size-1/4 p-1  shadow-xl'>submit</button>
        </form>
        <div className="text-white">Not a member <a href='' target='_blank' className='text-blue-700'>register Here</a> </div>
        </div>
      </div>
      </div>
      </>
  )
}

export default App
