import React from 'react'
import './Cover.css';
import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';


function Cover() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };
    

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        // Login successful
        console.log('Login successful');

        navigate('/')
      } else {
        // Login failed
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
            <form action="" onSubmit={handleSubmit}>
              <input className='id' type="email" name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
              <input className='pswd' type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
              <div className='login-btn ml-[40px]'>
                <input className='sub-btn' type='submit' value='Login'/>
              </div>
            </form>
        </div> 
        <div className='description'>
          <Routes>
            <Route path='/' element={<p> Don't have an account? <Link className ='text-blue-800' to="/signup">Register</Link></p>  }></Route>
          </Routes>
          
        </div>       
      </div>
    </div>
  )
}

export default Cover
