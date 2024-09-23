// post-list-store.jsx
import {  createContext, useReducer, useCallback, useState, useEffect} from "react";

// Create a context
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Reducer for managing post list state
const postlistReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === 'DELETE_POST') {
      newPostList = currentPostList.filter((post) => post.id !== action.payload.postid);
  }
  else if(action.type === 'ADD_POST'){
    newPostList = [action.payload,...currentPostList];
  }
  else if(action.type === 'ADD_API_POST'){
    
    newPostList = action.payload.posts;
}
  return newPostList;
};


// PostListProvider component that wraps the application with context
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postlistReducer, []);

  

  const addPost = (post) => {
    dispatchPostList({
      type:'ADD_POST',
      payload:post,
    })
   // console.log(` ${userid} ${postTitle} ${postBody} ${reactions} ${tags}`);
    
  };

  const addAPIPost = (posts) => {
    dispatchPostList({
      type:'ADD_API_POST',
      payload:{
        //we can write only posts value beacause both are same
        posts,
        
      }
    })
    //console.log(` ${userid} ${postTitle} ${postBody} ${reactions} ${tags}`);
    
  };

   /* The "useCallback" hook is used to prevent the function from being recreated on every render, which is useful if deletePost is passed down as a prop to child components or used in dependency arrays of other hooks */
   const deletePost = useCallback((postId) => { //ensures that deletePost does not get recreated on every render
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  },[dispatchPostList]); //dependency me dispatchPostList; The dependencies array for useCallback is [dispatchPostList], meaning deletePost will only be recreated if dispatchPostList changes. This ensures that deletePost remains stable across renders unless dispatchPostList itself changes.

  


  return (
    <PostList.Provider value={{ postList,addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
