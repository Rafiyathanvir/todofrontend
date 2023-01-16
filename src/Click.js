import React from 'react'
import { Link } from 'react-router-dom'

function Click() {
    

  
  return (
   <>
    <h1 style={{textAlign:"center"}}>Welcome to ToDO List App</h1>
    
    <Link to="/ap"><button  style={{backgroundColor:"lightblue",marginLeft:"700px",marginTop:"50px",width:"100px",background:"blue"}}>Click Me</button></Link>
    </>
  )
  
}

export default Click