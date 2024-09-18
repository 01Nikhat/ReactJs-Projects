// PostList.jsx
import { useContext } from "react";
import Post from "./Post"; // Assuming Post is a component rendering individual posts
import { PostList } from "../store/post-list-store"; // Import the PostList context

const PostListComponent = () => {
  const { postList } = useContext(PostList); // Use context to get postList
  console.log(postList);
  

  if (!postList || postList.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <>
      {postList.map((postData) => (
        <Post key={postData.id} postData = {postData} />
      ))}
    </>
  );
};

export default PostListComponent;
