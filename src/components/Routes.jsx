import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Login from "./Login"
import {Routes, Route} from "react-router-dom"
import Signup from "./Signup";
import Dashboard from "./Dashboard";

export default function ({showToast}) {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/login" element={<Login showToast={showToast}/>}/>
        <Route path="/signup" element={<Signup showToast={showToast}/>}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="*" Component={NotFound}/>
      </Routes>
    </>
  );
}
