import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

 export let getBooks = createAsyncThunk("book/getBooks", async(args,thunkAPI)=>{
    const {rejectWithValue } = thunkAPI;
    try{
        // let res = await axios.get(`http://localhost:3005/books`)
        // console.log(res.data); 
        // i can destruct data
        let {data} = await axios.get(`http://localhost:3005/books`)
        console.log(data); 
        return data;
    }catch(err) {
        return rejectWithValue(err.message) ; 
    }

})
 export let insertBook = createAsyncThunk("book/insertBook" , async(bookData,thunkAPI)=>{
    const {rejectWithValue,getState} = thunkAPI;
    try {
        bookData.userName = getState().author.name;
        let res = await axios.post(`http://localhost:3005/books`, bookData);
        console.log(res);
        return res.data;
    }catch(err) {
        return rejectWithValue(err.message);
    }
 })
 export let deleteBook = createAsyncThunk("book/deleteBook", async(id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        let res = axios.delete(`http://localhost:3005/books/${id}`);
        console.log(res.data); // undefind => api response not contain valid response
        return id;
    }catch(err){
        return rejectWithValue(err.message)
    }
 })
let bookSlice = createSlice({
    name: 'book',
    initialState: {books : [],isLoading: false , error: null},
    extraReducers: (builder)=>{
        // getBooks
        builder.addCase(getBooks.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.books = action.payload;
        }),
        builder.addCase(getBooks.pending,(state,action)=>{
            state.isLoading = true;
            state.error = null;
        }),
        builder.addCase(getBooks.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }),
        // insertBook
        builder.addCase(insertBook.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.books.push(action.payload);
        }),
        builder.addCase(insertBook.pending,(state,action)=>{
            state.isLoading = true;
            state.error = null;
        }),
        builder.addCase(insertBook.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }),
        // deleteBook
        builder.addCase(deleteBook.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.books = state.books.filter((book)=> book.id != action.payload)
        }),
        builder.addCase(deleteBook.pending,(state,action)=>{
            state.isLoading = true;
            state.error = null;
        }),
        builder.addCase(deleteBook.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })

    }

});

export let bookReducer = bookSlice.reducer;