import React from 'react'
import App1 from './App1'
import { Link } from "react-router-dom";
import Click from './Click';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>

    
   <Routes>
           <Route path="/" exact element={<Click/>}/>
           <Route path="/Ap" exact element={<App1/>}/>
</Routes>




    
  </>

  )
}

export default App