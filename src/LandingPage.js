import React from 'react';
import './LandingPage.css';
import { useNavigate, Link } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/dashboard');
  };
  const handleLogIn = () => {
    navigate('/dashboard');
  };
  return (
    <div>
      <header>
        <h1 className='title_landingpage'>BoxerA&I</h1>
        <Link to='/login'>
          <button onClick={handleLogIn} className='button_login_LP'>Log In</button>
        </Link>
      </header>
      <main>
        <section>
          <h2>Welcome to our BoxerAnI!</h2>
          <p>Manage your inventory efficiently in a click.</p>
          <Link to='/signup'>
            <button onClick={handleSignUp} className='button_signup_LP'>Get Started</button>
          </Link>
        </section>
        <section>
          <h2>Features</h2>
          <section className='sectionlist_1'>
            <ul>Automated inventory tracking</ul>
            <ul>Intelligent demand forecasting</ul>
            <ul>Real-time analytics and reporting</ul>
          </section>
        </section>
        <section>
          <h2>About Us</h2>
          <p>Learn more about our company and the benefits of our app.</p>
          <button className='button_signup_LP'>Learn More</button>
        </section>
      </main>
      <footer>
        <p>© 2023 AI Inventory Management App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;