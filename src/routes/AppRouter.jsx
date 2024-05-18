import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import  Home  from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProviderRouter from "./ProviderRouter";
import NewBlog from "../pages/NewBlog";
import Account from "../pages/Account";
import Profile from "../pages/Profile";
const AppRoutes = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />}/> 
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/> 
        <Route path="/" element={<ProviderRouter />}>
          <Route path="user/new-blog" element={<NewBlog />} />    
          <Route path="/user/account" element={<Account />} />    
          <Route path="/user/profile" element={<Profile />} />    
        </Route> 
      </Routes>

  );
};

export default AppRoutes;
