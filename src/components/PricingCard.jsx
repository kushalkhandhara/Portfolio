import React from 'react';
import "./PricingCard.css";
import {Link} from "react-router-dom";

export default function PricingCard() {
  return (
    <>
    {/* Card 1 */}
      <div className="pricing">
        <h1 className="pricing-heading">Pricing</h1>
        <div className="card-container">
          <div className="card">
            <h3>Basic</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>- 3 Days -</p>          
            <p>- 3 Pages -</p>          
            <p>- Featured -</p>
            <p>- Responsive Web Design -</p>
            <Link to="/contact" className='btn'>
              Purchase
            </Link>
          </div>
        
          {/* Card 2 */}
          <div className="card">
            <h3>Basic</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>- 3 Days -</p>          
            <p>- 3 Pages -</p>          
            <p>- Featured -</p>
            <p>- Responsive Web Design -</p>
            <Link to="/contact" className='btn'>
              Purchase
            </Link>
          </div>
        
      
          {/* Card 3 */}
          <div className="card">
            <h3>Basic</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>- 3 Days -</p>          
            <p>- 3 Pages -</p>          
            <p>- Featured -</p>
            <p>- Responsive Web Design -</p>
            <Link to="/contact" className='btn'>
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </>
    
  )
}
