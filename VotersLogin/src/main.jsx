import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider,Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Vote from './pages/Vote.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/' element ={<Layout/>}>
      <Route path='/vote' element={<Vote/>}/>
    </Route>
    
    
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </React.StrictMode>,
)
