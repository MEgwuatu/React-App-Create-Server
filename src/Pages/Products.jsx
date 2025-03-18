import React from 'react'
import { Link} from "react-router-dom"
import './Products.css';

const Products = () => {
  return (
    
        
      
        <div class="card-list">
        <Link to="#" className="card-item">
            <img src="src/assets/Breaking News Logo.jpeg" alt="Card Image"/>
            <span class="developer">Developer</span>
            <h3>A "developer" codes software and websites.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>               
            </div>
            </Link>

            <Link to="#" className="card-item">
                <img src="src/assets/Design and Dev picture.webp" alt="Card Image"/>
                <span class="designer">Desinger</span>
                <h3>A "designer" is a design expert.</h3>
                <div class="arrow">
                    <i class="fas fa-arrow-right card-icon"></i>
                </div>
            </Link>

            <Link to="#" className="card-item">
                <img src="src/assets/Developer Logo.jpeg" alt="Card Image"/>
                <span class="editor">Editor</span>
                <h3>An "editor" ensures content quality and accuracy.</h3>
                <div class="arrow">
                    <i class="fas fa-arrow-right card-icon"></i>
                </div>
            </Link>

        <Link to="#" class="card-item">
            <img src="src/assets/hero-img.jpg" alt="Card Image"/>
            <span class="editor">Foreign News</span>
            <h3>"Foreign News" is very key to be abreast with international changes.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>

        </Link>

        <Link to="#" className="card-item">
            <img src="src/assets/logo.svg" alt="Card Image"/>
            <span class="editor">Breaking News</span>
            <h3>"Breaking News" is very important, especially for tourists and investors.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>

        </Link>

        <Link to="#" className="card-item">
            <img src="src/assets/News Flash Logo.jpeg" alt="Card Image"/>
            <span class="editor">News Flash</span>
            <h3>"News Flash" is can be very vital in war torn communities.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
            </Link>

     </div>
    
  )
}

export default Products
