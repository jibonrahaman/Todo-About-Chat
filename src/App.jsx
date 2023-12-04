import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import LoginReg from './pages/LoginReg';
import HomePage from './pages/Home/HomePage';
import Photos from './pages/PhotosPart/Photos';
import HomeHome from './Components/HomeHome/HomeHome';


const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<LoginReg />}>  
      </Route>
    <Route
      path="/profile"
      element={<HomePage />}>  
      </Route> 
      <Route
      path="/home"
      element={<HomeHome />}>  
      </Route>
       <Route
      path="/photos"
      element={<Photos />}>  
      </Route>
    {/* <Route
      path="/forgetpassword"
      element={<ForgetPassword />}>  
      </Route> */}
    
   </>
  )
);

const App = () => {
  return (
    <>
  
    <RouterProvider router={router} />
    </>
  )
}

export default App