import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const useridElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userid = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" "); // Split by comma to get an array of tags

    addPost(userid, postTitle, postBody, reactions, tags);

    useridElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";




    // Now call the addPost function with proper values
   
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">Your User ID</label>
        <input type="text" ref={useridElement} className="form-control" id="userid" placeholder="Enter your userid" />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">Post Title</label>
        <input type="text" ref={postTitleElement} className="form-control" id="postTitle" placeholder="How are you feeling today..." />
      </div>

      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">Post Content</label>
        <textarea ref={postBodyElement} rows="4" className="form-control" id="postBody" placeholder="Tell us more about it..." />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of Reactions</label>
        <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post" />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
        <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter tags separated by commas" />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;
