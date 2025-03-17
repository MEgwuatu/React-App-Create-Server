import React from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Products from './Pages/Products';
import Testimonials from './Pages/Testimonials';
import Contacts from './Pages/Contact';
import Sign_Up from './Pages/Sign_Up';
import SignIn from './Pages/Singn_In';










const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Products/>} />
        <Route path="/testimonial" element={<Testimonials/>} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/Sign-Up" element={<Sign_Up/>} />
        <Route path="/Sign_In" element={<SignIn/>} />


      
      </Routes>      

    </div> 
   

  )
}

export default App;
