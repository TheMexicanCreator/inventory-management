import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call, validation, etc.)
    // After successful login, navigate to the main dashboard
    navigate('/dashboard'); // Replace '/dashboard' with the appropriate path
  };
  return (
    <div className='login'>
      <form onSubmit={handleFormSubmit} className='login_form'>
        <h1> Log In! </h1>
        <input
          className='login_input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className='login_input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='login_button'>Log In</button>
      </form>
    </div>
  )
}

export default Login