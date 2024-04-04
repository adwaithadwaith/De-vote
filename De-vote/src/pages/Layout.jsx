import React from 'react'
import {Outlet, useLocation} from 'react-router-dom'



function Layout() {
  const location = useLocation();
  const isLoginOrRegister = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/admin';
  const pageClass = isLoginOrRegister ? 'custom-background' : 'normal-background';
  return (
    <div className='{pageClass}'>
          
        <Outlet/>
      
    </div>
  )
}

export default Layout
