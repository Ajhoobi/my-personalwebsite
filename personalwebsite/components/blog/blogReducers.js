import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  
}


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (URL) => {
   
        const response = await axios.get(URL)
        return response.data.data.blog
  
})



const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                
                state.posts = action.payload;

             
                
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                console.log(state.error)
            })
            
            
           
    }
})



export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;


export default postsSlice.reducer