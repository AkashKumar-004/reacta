import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name: "Username",
    initialState: {
        username:null
    },
    reducers: {
        login:(state,action)=>{
            state.username=action.payload
        },
        logout: (state) =>{
            state.username=null
        }
    }
       
})

export const { login,logout } =UserSlice.actions
export const selectuser=(state)=>state.username.username
export default UserSlice.reducer