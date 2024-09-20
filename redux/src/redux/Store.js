import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./UserSlice";

export default configureStore({
    reducer: {
        username:useReducer,
    },
})