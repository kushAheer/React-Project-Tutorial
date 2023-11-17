import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/user/User.jsx'


const router = createBrowserRouter([
  { path:'/' , element:<App/> , children :[
    { path : '/' , element : <Home/>},
    {path : '/about' , element : <About/>},
    {path : '/contact' , element : <Contact/>},
    {path : '/user/:userid' , element : <User/>},
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
