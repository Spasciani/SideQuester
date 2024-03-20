import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserLogin } from "./pages/userLogin"; 
import { UserRegister } from "./pages/userRegister"; 
import Home from './pages/home'
import Navbar from "./components/Navbar/navbar";

export default function App(){
  const [setCurrentForm] = useState('login');
  const toggleForm= (forName) => {
    setCurrentForm(forName);
  }
  return(
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin onFormSwitch={toggleForm} />} />
          <Route path="/register" element={<UserRegister onFormSwitch={toggleForm} />} />
        </Routes>
      </div>
    </Router>
);
}

