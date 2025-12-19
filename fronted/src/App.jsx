import React from "react";
import { Navigate, Routes  } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './pages/Home';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export const serverUrl = "http://localhost:8000"

import {ToastContainer} from "react-toastify"
import getCurrentUser from "./customHooks/getCurrentUser";
import { useSelector } from "react-redux";
import Profile from './pages/Profile';
import ForgetPassword from "./pages/ForgetPassword";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./pages/Educator/Dashboard";
import Courses from "./pages/Educator/Courses";
import CreateCourses from "./pages/Educator/CreateCourses";
import getCreatorCourse from "./customHooks/getCreatorCourse";
import EditCourse from "./pages/Educator/EditCourse";
import getPublishedCourse from "./customHooks/getPublishedCourse";



function App(){
  getCurrentUser()
  getCreatorCourse()
  getPublishedCourse()

  
  const {userData} = useSelector(state=>state.user)
  
  return(
    <>
    <ToastContainer />
    <Routes>

      <Route path='/' element={<Home/>}/> 
      <Route path='/signup' element={!userData ? <SignUp/> : <Navigate to={"/"}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={userData ? <Profile/> : <Navigate to={"/signup"}/>}/>
      <Route path='/forget' element={<ForgetPassword/>}/>
      <Route path='/editprofile' element={userData ? <EditProfile/> : <Navigate to={"/signup"}/>}/> 
      <Route path='/dashboard' element={userData?.role === "educator" ? <Dashboard/> : <Navigate to={"/signup"}/>}/>
      <Route path='/courses' element={userData?.role === "educator" ? <Courses/> : <Navigate to={"/signup"}/>}/> 
      <Route path='/createcourse' element={userData?.role === "educator" ? <CreateCourses/> : <Navigate to={"/signup"}/>}/> 
      <Route path='/editcourse/:courseId' element={userData?.role === "educator" ? <EditCourse/> : <Navigate to={"/signup"}/>}/> 
 
    </Routes>
    </>

  )
}
export default App