import React from 'react'
import './AdminLogin.css'


function AdminLogin() {
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
            <form action="">
              <input className='id' type="text" name='ID' placeholder='ID'/>
              <input className='pswd' type='password' name='password' placeholder='Password'/>
              <div className='login-btn'>
                <input className='sub-btn mx-[40px]' type='submit' value='Login'/>
              </div>
            </form>
        </div> 
           
      </div>
    </div>
    </div>
  )
}

export default AdminLogin
