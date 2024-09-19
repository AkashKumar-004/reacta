import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from '../redux/UserSlice'
const Login=()=>{
    const uname=useRef(null)
    const dispatch=useDispatch()
    const handle=(e)=>{
        e.preventDefault()
        
        dispatch(login({
            name:uname.current.value
        }))
    }
    return(
        <>
        <form onSubmit={handle}>
            <input type="text" name='name' ref={uname} />
            <button type='submit'>login</button>
        </form>
        <button onClick={()=>{dispatch(login())}}>logout</button>
        </>
    )
}

export default Login
