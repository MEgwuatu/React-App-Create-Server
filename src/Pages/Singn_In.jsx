import React from 'react'
import { Link} from "react-router-dom"
import './Sign_In.css';


const Singn_In = () => {
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
                  
    
                    <div class="link">
                        <button type="submit" class="login"> Login</button>
                        <a href="#" class="forgot"> forgot password</a>
    
                    </div>   
    
                    
                
    
                </form>
    
            </div>
        </div>
      )
    }
    

export default Singn_In
