import React from 'react'
import { Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header>
    <nav className="navbar">
      <Link className="logo" href="#">Coffee<span>.</span></Link>
      <ul className="menu-links">
        <Link to={'/'}> <li>Home</li></Link>
        <Link to={'/product'}> <li>Products</li></Link>
        <Link to={'/testimonial'}> <li>Testimonials</li></Link>
        <Link to={'/about'}> <li>About us</li></Link>
        <Link to={'/contact'}> <li>Contact us</li></Link> 
        <Link to={'/sign-up'}> <li>Sign Up</li></Link>     
      </ul>
  </nav>     
       
</header>
  )
}

export default Navbar;

