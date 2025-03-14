import React from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';


const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<h1> about page </h1>} />
      </Routes>      

    </div> 
   

  )
}

export default App;
