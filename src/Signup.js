import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform signup logic here (e.g., API call, validation, etc.)
        // After successful signup, navigate to the main dashboard
        navigate('/dashboard'); // Replace '/dashboard' with the appropriate path
      };

      const goBack = () => navigate(-1);

  return (
    <div className='signup'>
      <h1> Sign Up! </h1>
      <form onSubmit={handleFormSubmit} className='signup_form'>
        <input
          className='signup_input'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className='signup_input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className='signup_input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='signup_button'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup