// PostList.jsx
import { useContext, useEffect, useState } from "react";
import Post from "./Post"; // Assuming Post is a component rendering individual posts
import { PostList as PostListData } from "../store/post-list-store"; // Import the PostList context
import WelcomeMessage from "./WelcomMessage";
import LoadingSpinner from "./LoadingSpinner"


const PostList = () => {
  const { postList, addAPIPost } = useContext(PostListData); // Use context to get postList

  const [fetching,setFetching] = useState(false)
  
  //console.log(postList);
  useEffect(() =>{
    setFetching(true);
   //console.log("fetch started");
   const controller = new AbortController();
   const signal = controller.signal;
    
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then((data) =>{
      addAPIPost(data.posts);
      setFetching(false);
    });

    return () => { //clean up function
      console.log("Cleaning up UseEffect.");
      controller.abort(); //S4) You can call the abort() method on the AbortController instance to cancel the operation.
    };
    
   //console.log(fetching);
    //addAPIPost(data.posts);
  },[]);
  //console.log("fetch ended");
  //console.log(fetching);

  return (
    <>
    {fetching && <LoadingSpinner/>}
    {!fetching && postList.length === 0 && <WelcomeMessage />}
     
      {!fetching &&
      postList.map((postData) => (
        <Post key={postData.id} postData = {postData} />
      ))}
    </>
  );
};

export default PostList;

/*
    - The useEffect hook in React accepts two arguments:
        1) Effect Function: A function that contains the side effect logic. This function runs after the component renders. It can optionally return a cleanup function to handle any necessary cleanup.
        2) Dependency Array: An optional array that lists dependencies. The effect runs whenever any of the dependencies change. If this array is empty, the effect runs only once after the initial render. If omitted, the effect runs after every render.


        1)Effect Function
            --> This function is where you write your side effect code. It is executed after the component renders. If a cleanup function is needed, it can be returned from this function.

                                                      useEffect(() => {
                                                        ///Side effect code here
                                                        
                                                        return () => {
                                                          /// Cleanup code here (optional)
                                                        };
                                                      });
          
        2) Dependency Array
            --> The dependency array determines when the effect should run. It can be:

                i) Empty Array []: Runs the effect only once after the initial render. It's equivalent to componentDidMount in class components.
                                                        useEffect(() => {
                                                          /// Runs once after the initial render
                                                        }, []);
                              
                ii) Dependencies [dep1, dep2, ...]: Runs the effect whenever any of the dependencies change. The effect will re-run if any value in the array changes between renders.
                                                        useEffect(() => {
                                                          /// Runs when `dep1` or `dep2` changes
                                                        }, [dep1, dep2]);

                iii) Omitting the Array: Runs the effect after every render. This can be useful for effects that should run every time the component updates.

                                                        useEffect(() => {
                                                          /// Runs after every render
                                                        });
*/