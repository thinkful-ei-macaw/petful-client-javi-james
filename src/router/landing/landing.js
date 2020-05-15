import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

function Landing() {
    return (
        <main>
          <div className="big-container">
              <section className="description left-container">
                <p>This is Petful! The First-in First-out based adoption center, where the only animal you
                   can adopt is the one matched to you by the queue. There are two types of animals you can adopt:
                   cats and dogs. You can choose if you want to adopt the pet matched to you, if you decide not to,
                   you will be removed from the queue and the next person matched will have that option to adopt that pet.  
                   Please make sure the pet has a loving home!</p>
                   
                <Link to="/form">Get Started</Link>
              </section>
            <div className="right-container">
              <div className="red-box">
                <p>This is where the image goes</p>
              </div>
            </div>
          </div>
        </main>
  
    )
}

export default Landing;