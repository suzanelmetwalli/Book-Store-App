import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
    name: 'author',
    initialState: { isLoggedIn: false , name: "Suzan eladl"},
    reducers: {
        logInOut: (state)=>{
            state.isLoggedIn = !state.isLoggedIn;
        }
    }
})
export const authReducer = authSlice.reducer
export const {logInOut} = authSlice.actions;