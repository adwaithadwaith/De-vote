import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const token = localStorage.getItem('jwt');
    console.log("Token:", token); // This should show the token if present
  
    if (!token) {
      // Redirect to the login page if the user is not authenticated
      return <Navigate to="/login" replace />;
    }
  
    // Render children if the user is authenticated
    return <Outlet />;
  };
  
export default ProtectedRoute;