import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './pages/Layout.jsx'
import Candidate from './pages/Candidate.jsx'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Voter from './pages/Voter.jsx'
import Elections from './pages/Elections.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='/candidate' element={<Candidate/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/voters' element={<Voter/>}/>
      <Route path='/elections' element={<Elections/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </React.StrictMode>,
)
