import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom"; //imported from react-router
import App from "./routes/App.jsx";

import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";

//createBrowserRouter is a function that creates a router instance using the HTML5 history API. It allows you to use normal URLs (e.g., /about) and it takes an array jaha ap sare ke sare apna path(which will be individual objects) define kar sakte ha
const router = createBrowserRouter([ 
  {
    path: "/", //default path
    element: <App />, //by default App component load hona chaiye
    children: [ //agar children ka objects nai banaynge and bahar object banaynge then sidebar,etc. wo sab nai dikhega
      { 
        path: "/", 
        element: <PostList />, 
        loader: postLoader //For the route with path: "/" and loader: postLoader, React Router will call the postLoader function before rendering the <PostList /> component. The postLoader function can perform data fetching or other asynchronous operations and return data that will be available to the <PostList /> component when it is rendered.
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction, //the component associated with the route, <CreatePost />, will be rendered. This is part of the standard rendering process for React Router. When a form is submitted or another user action is triggered that interacts with the route, the createPostAction function will be executed. The createPostAction function is used to handle form data or perform actions related to creating a post. This might include submitting data to an API or performing other side effects.
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*
      Use "RouterProvider" to pass the router configuration to your application. Typically, this is done in your "main" entry file. It is used in conjunction with "createBrowserRouter" or "createHashRouter" to set up the router configuration and pass it to the application. This setup allows your application to handle different routes and render components based on the current URL. 
    */}
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

/*
    NOTE: HERE, ADD POST WILL NOT WORK, JUST SEE IN CONSOLE KAISE SERVER SE RESPONSE ARHA HA 
*/