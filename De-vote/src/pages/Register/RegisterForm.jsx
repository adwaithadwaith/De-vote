import React from 'react'
import './RegisterForm.css'
import NavBar from '../../components/NavBar/NavBar'
import { Link, Route, Routes } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className='registerpage'>
        <NavBar/>
        <div className="register">
      <div className='login'>
        <div className="title"><h3 className='txt'>Voter Register</h3></div>
        <div className="form">
            <form action="">
              <input className='id' type="text" name='ID' placeholder='User id'/>
              <input className='name' type="text" name='name' placeholder='Name'/>
              <input className='mobile' type='number' name='mobile' placeholder='Mobile'/>
              <div className="verify-btn">
                <input className='verify' type='submit' name='verify' value='Verify' />
              </div>
              <input className='pswd' type='password' name='password' placeholder='Password'/>
              <div className='login-btn'>
                <input className='sub-btn mx-[40px]' type='submit' value='Register'/>
              </div>
            </form>
        </div> 
        <div className='description'>
          <Routes>
            <Route path='/' element={<p>Already have an account? <Link className=' text-blue-800' to="/login">Login</Link></p>  }></Route>
          </Routes>
          
        </div>       
      </div>
        </div>
    </div>
  )
}

export default RegisterForm
