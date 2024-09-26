import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({postData})=>{

  const {deletePost} = useContext(PostList);


  return(
    <div className="card post-card" style={{width: "18rem"}}>
     
      <div className="card-body">
        <h5 className="card-title">
          {postData.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={()=>deletePost(postData.id)}>
            
          <MdDelete />
          </span>

        </h5>
        <p className="card-text">{postData.body}</p>
        {postData.tags.map((tag) =>(
           <span  key={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
           This post is being reacted by {postData.reactions.likes} people
        </div>
       
      </div>
    </div>
  );
}
export default Post;