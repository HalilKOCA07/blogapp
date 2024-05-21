import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import Account from "../pages/Account";
import Profile from "../pages/Profile";
import PrivaterRouter from "./PrivateRouter";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import Detail from "../pages/Detail";
const AppRoutes = () => {
  return (
  <Router>
      <AppNavbar />
        <Routes>
        <Route path="" element={<Home />}/> 
        <Route path="/about" element={<About />}/> 
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/> 
        <Route path="/detail/:id" element= {<Detail />} />
        <Route path="/auth" element={<PrivaterRouter />}>
          <Route path="/auth" element={<Account />} />    
          <Route path="/auth/new-blog" element={<NewBlog />} />    
          <Route path="/auth/profile" element={<Profile />} />    
        </Route> 
      </Routes>
      <Footer />
  </Router>

  );
};

export default AppRoutes;
