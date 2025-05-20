import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';



const router=createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Nav/>
      <Home/>
    </div>
  },
  {
    path:"/pastes",
    element:
    <div>
      <Nav/>
      <Paste/>
    </div>
  },
  {
    path:"/pastes/:id",
    element:
    <div>
      <Nav/>
      <ViewPaste/>
    </div>
  },
]);


function App() {


  return (
   <div>
    <RouterProvider router={router}>
    
    </RouterProvider>
   </div>
   
  )
}

export default App
