import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import Categories from "./views/Categories/Categories";
import Login from "./views/Login/LoginSignup"
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/About us",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/Categories",
    element:<Categories/>
  },
  {
    path:"/Login",
    element:<Login/>
  }

])

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(<RouterProvider router={router}/>);