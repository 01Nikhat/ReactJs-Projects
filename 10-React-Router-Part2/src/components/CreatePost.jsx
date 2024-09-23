import { PostList } from "../store/post-list-store";
import {Form,redirect} from "react-router-dom";


const CreatePost = () => {
  
  return (
    <Form className="create-post" method="POST" >
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">Your User ID</label>
        <input type="text" name="userId" className="form-control" id="userid" placeholder="Enter your userid" />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">Post Title</label>
        <input type="text" name="title" className="form-control" id="postTitle" placeholder="How are you feeling today..." />
      </div>

      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">Post Content</label>
        <textarea name="body" rows="4" className="form-control" id="postBody" placeholder="Tell us more about it..." />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of Reactions</label>
        <input type="text" name="reactions" className="form-control" id="reactions" placeholder="How many people reacted to this post" />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
        <input type="text" name="tags" className="form-control" id="tags" placeholder="Please enter tags separated by commas" />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </Form>
  );
};
/*                     Submitting data using action
    1. Action method can be used to perform an action on submission of Forms.
    2. Custom Form component need to be used along with "name" attribute for all inputs.
    3. Action function will get an data object. To generate correct request object method=“post” attribute should be used.
    4. Data.request.formData() method can be used to get form data Object.
    5. Object.fromEntries(formData) can be used to get actual input data.
    6. redirect() response can be returned for navigation after submission.
*/
export async function createPostAction(data) {
  const formData = await data.request.formData();//if await used then async function hoga, await means data.request.formData() ye pura kaam karlo then iska response dena to formData
  const postData = Object.fromEntries(formData); //to get form data Objec
  postData.tags = postData.tags.split(" ");
 console.log(postData);
 

   fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
  .then(res => res.json())
   .then(post => {
    console.log(post);
    
  });
  return redirect("/");
}

export default CreatePost;
