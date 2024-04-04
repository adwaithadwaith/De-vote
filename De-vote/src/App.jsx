import React from 'react';
import './App.css';
import Header from './components/Header';
import Layout from './pages/Layout.jsx';
import Candidate from './pages/Candidate.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Voter from './pages/Voter.jsx';
import Elections from './pages/Elections.jsx';
import Results from './pages/Results.jsx';
import Login from './pages/Login/Login.jsx';
import RegisterForm from './pages/Register/RegisterForm.jsx';
import AdminLogin from './pages/AdminLogin/AdminLogin.jsx';
import { Routes, Route, BrowserRouter as Router, useLocation, Navigate } from 'react-router-dom';

import { useAuthContext } from './hooks/useAuthContext.jsx';


function AppWithHeader() {
  const location = useLocation();
  const {user}=useAuthContext()

  // Paths where the Header should not be displayed
  const noHeaderPaths = ['/', '/signup', '/admin'];

  // Check if the current path is one of the paths where Header should not be displayed
  const showHeader = !noHeaderPaths.includes(location.pathname);

  const isLoginOrRegister = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/admin';
  const pageClass = isLoginOrRegister ? 'custom-background' : 'normal-background';





  return (
    <div className={pageClass}>
      {showHeader && <Header />}
      
      {/* Route configuration */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/dashboard" element={user?<Dashboard />:<Navigate to='/'/>} />
          <Route path="/voters" element={user?<Voter />:<Navigate to='/'/>} />
          <Route path="/elections" element={user?<Elections />:<Navigate to='/'/>} />
          <Route path="/results" element={user?<Results />:<Navigate to='/'/>} />
          <Route index={true} element={<Login/>}/>
          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/admin" element={<AdminLogin />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  
  return (
    <Router>
      <AppWithHeader />
    </Router>
  );
}

export default App;
