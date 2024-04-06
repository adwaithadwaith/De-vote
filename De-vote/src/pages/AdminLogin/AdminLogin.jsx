import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with admin details
    const adminData = { email: adminId, password: password };
    console.log(adminData);

    try {
      const response = await fetch('http://localhost:3000/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData), // Convert admin details to JSON
      });
      
      if (!response.ok) {
        throw new Error('Failed to login as admin');
      }

      // You might want to do something upon successful login, such as redirecting the user
      navigate('/dashboard')

    } catch (error) {
      console.error('Error logging in as admin:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div className='adminlogin'>
      <div className='navbar'>
        <div className='img'><img className='logo' src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3262425/how-to-vote-icon-sm.png" alt="" /></div>
        <div className='text'>
          <h1 className='devote text-2xl font-bold'>De-Vote</h1>
        </div>
      </div>
      <div className='adm'>
        <div className='login'>
          <div className="title"><h3 className='txt'>Admin Login</h3></div>
          <div className="form">
              <form onSubmit={handleSubmit}>
                <input 
                  className='h-9 w-3/4 rounded-lg ml-10 mt-0' 
                  type="text" 
                  name='ID' 
                  placeholder='ID' 
                  value={adminId} 
                  onChange={(e) => setAdminId(e.target.value)}
                />
                <input 
                  className='h-9 w-3/4 rounded-lg ml-10 mt-4' 
                  type='password' 
                  name='password' 
                  placeholder='Password'
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='pt-4 pr-11 flex justify-end'>
                  <input className='h-7 w-1/4 bg-purple-800 rounded-lg text-white cursor-pointer mr-[16px]' type='submit' value='Login'/>
                </div>
              </form>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
