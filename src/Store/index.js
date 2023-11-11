import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookSlice";
import { authReducer } from "./authSlice";

export let store = configureStore({
    reducer: {
        books: bookReducer,
        author: authReducer
    }
})