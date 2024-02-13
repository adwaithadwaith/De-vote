import React from 'react'
import {Outlet, useLocation} from 'react-router-dom'

import Header from '../components/Header'

function Layout() {
  const location = useLocation();
  const isLoginOrRegister = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/admin';
  const pageClass = isLoginOrRegister ? 'custom-background' : 'normal-background';
  return (
    <div className={pageClass}>
          {!isLoginOrRegister && <Header />}
        <Outlet/>
      
    </div>
  )
}

export default Layout
