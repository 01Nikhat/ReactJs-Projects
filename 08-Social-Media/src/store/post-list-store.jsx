// post-list-store.jsx
import { createContext, useReducer } from "react";

// Create a context
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Reducer for managing post list state
const postlistReducer = (currentPostList, action) => {
  switch (action.type) {
    default:
      return currentPostList;
  }
};

// Default initial post list
const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to Kolkata",
    body: "Hi Friend, I am going back to home. Hope to enjoy a lot.",
    reactions: 0,
    userid: "",
    tags: ["vacation", "kolkata", "enjoying"],
  },
  {
    id: "2",
    title: "B.Tech Completed",
    body: "Hi Friend, B.Tech is done, still studying for GATE. Hope to see the result.",
    reactions: 15,
    userid: "",
    tags: ["studying", "kolkata", "degree", "Graduate"],
  },
];

// PostListProvider component that wraps the application with context
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postlistReducer, DEFAULT_POSTLIST);

  const addPost = () => {};
  const deletePost = (postid) => {
    console.log(`delete post called for ${postid}`);
    dispatchPostList(
      {
        type:"DELETE POST",
        payload:{
          postid
        }
      }
    )
    
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
