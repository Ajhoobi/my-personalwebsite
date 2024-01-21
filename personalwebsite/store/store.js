import { configureStore } from "@reduxjs/toolkit";
import postsReducer from  '../components/blog/blogReducers'



export const store = configureStore({
    reducer: {
        posts: postsReducer,
      
      
    }
})

