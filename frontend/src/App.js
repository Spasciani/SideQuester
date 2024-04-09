import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserLogin } from "./pages/userLogin"; 
import { UserRegister } from "./pages/userRegister"; 
import Home from './pages/home'
import MapComponent from './pages/maps'
import Navbar from "./components/Navbar/navbar";
import { PostQuest } from './pages/postQuest';
import QuestConfirmation from './pages/afterPost';

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
          <Route path="/map" element={<MapComponent />} />
          <Route path="/post-quest" element={<PostQuest />} />
          <Route path="/quest-confirmation" element={<QuestConfirmation />} />
        </Routes>
      </div>
    </Router>
);
}