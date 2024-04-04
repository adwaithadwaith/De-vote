import React, { useState } from 'react';
import './Cover.css';

import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

function Cover() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const user = { email, password };
   

    try {
      console.log(JSON.stringify(user)); // Add this line before the fetch call
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      if (response.ok) {
  const responseData = await response.json();

  // Assuming the JWT is in the response body under the key 'token'
        const { token } = responseData;

        // Store the JWT token in local storage
        localStorage.setItem('jwt', token);
        // Login successful
  console.log('Login successful');

// Navigate to the dashboard
  navigate('/dashboard');
} else {
  // Handle login failure (e.g., invalid credentials)
  console.log('Login failed');
}
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='cover'>
      <div className='login'>
        <div className="title"><h3 className='txt'>Voter Login</h3></div>
        <div className="form">
            <form onSubmit={handleSubmit}>
              <input className='h-9 w-3/4 rounded-lg ml-10 mt-0' type="email" name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
              <input className='h-9 w-3/4 rounded-lg ml-10 mt-4' type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
              <div className='pt-4 pr-11 flex justify-end'>
                <input className='h-7 w-1/4 bg-purple-800 rounded-lg text-white cursor-pointer mr-[16px]' type='submit' value='Login'/>
              </div>
            </form>
        </div> 
        <div className='description'>
          <p> Don't have an account? <Link className='text-blue-800' to="/signup">Register</Link></p>
        </div>       
      </div>
    </div>
  );
}

export default Cover;