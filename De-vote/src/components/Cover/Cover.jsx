import React from 'react'
import './Cover.css';
import { Link, Route, Routes } from 'react-router-dom';


function Cover() {
  return (
    <div className='cover'>
      <div className='login'>
        <div className="title"><h3 className='txt'>Voter Login</h3></div>
        <div className="form">
            <form action="">
              <input className='id' type="text" name='ID' placeholder='ID'/>
              <input className='pswd' type='password' name='password' placeholder='Password'/>
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
