import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';

function RegisterForm() { 
  const [email, setEmail] = useState('');
  const [ktuid, setKtuid] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, ktuid, password };

    try {
      const response = await fetch(`http://localhost:3000/signup`, { // change this when hosting
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      if (response.ok) {

        console.log('Registration successful');
        
        navigate('/');
        // Perform any actions after successful registration, e.g., redirect to login page
      } else {
        console.log('Failed to register123', response);
      }
    } catch (error) {
      console.error('Failed to register', error);
    }
  };

  return (
    <div className='registerpage'>
        <NavBar />
        <div className="register">
            <div className='login'>
                <div className="title"><h3 className='txt'>Voter Register</h3></div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input
                            className='email'
                            type="email"
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='id'
                            type="text"
                            name='ktuid'
                            placeholder='KTU ID'
                            value={ktuid}
                            onChange={(e) => setKtuid(e.target.value)}
                        />
                        <input
                            className='pswd'
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='login-btn'>
                            <input className='sub-btn mx-[40px]' type='submit' value='Register'/>
                        </div>
                    </form>
                </div> 
                <div className='description'>
                    <p>Already have an account? <Link className='text-blue-800' to="/">Login</Link></p>
                </div>       
            </div>
        </div>
    </div>
  );
}

export default RegisterForm;
