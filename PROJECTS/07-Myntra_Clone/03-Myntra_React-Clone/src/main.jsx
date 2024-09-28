
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../src/routes/App.jsx';
import Bag from '../src/routes/Bag.jsx'
import './index.css';
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
  
  
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/",
         element: <Home /> }, // Default child route
      { path: "/bag",
         element: <Bag /> }, // Child route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
