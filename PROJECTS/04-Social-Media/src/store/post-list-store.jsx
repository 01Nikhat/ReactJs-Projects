// post-list-store.jsx
import { createContext, useReducer } from "react";

// Create a context
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addAPIPost:  () => {},
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

// Default initial post list
/*const DEFAULT_POSTLIST = [
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
*/
// PostListProvider component that wraps the application with context
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postlistReducer, []);

  const addPost = (userid,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type:'ADD_POST',
      payload:{
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userid: userid,
        tags: tags,

      }
    })
   // console.log(` ${userid} ${postTitle} ${postBody} ${reactions} ${tags}`);
    
  };

  const addAPIPost = (posts) => {
    dispatchPostList({
      type:'ADD_API_POST',
      payload:{
        //we can write only posts value beacause both are same
        posts
      }
    })
    //console.log(` ${userid} ${postTitle} ${postBody} ${reactions} ${tags}`);
    
  };

  const deletePost = (postid) => {
    console.log(`delete post called for ${postid}`);
    dispatchPostList(
      {
        type:"DELETE_POST",
        payload:{
          postid
        }
      }
    )
    

  };

  return (
    <PostList.Provider value={{ postList, addAPIPost,addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
