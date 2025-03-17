import React from 'react'
import { Link} from "react-router-dom"
import './Sign_Up.css';

const Sign_Up = () => {
  return (
    <div class="container flex">
        <div class="facebook-page flex">
            <div class="text">
                <h1>Coffee .</h1>
                <p> Find the right Coffee </p>
                <p> service, right away</p>
            </div>

            <form>
                <input type="email" placeholder="Enter your email" required />
                <input type="password" placeholder="Enter your Password" required /> 
                <input type="username" placeholder="Enter your Username" required />
                <input type="password" placeholder="Confirm your Password" required />

                <div class="link">
                    <button type="submit" class="login"> Login</button>
                    <a href="#" class="forgot"> forgot password</a>

                </div>   

                <hr />

                <div class="button">
                    <Link to={'/Sign_In'} className="forgot">Already have an account?</Link>
                
                </div>  

            </form>

        </div>
    </div>
  )
}

export default Sign_Up
