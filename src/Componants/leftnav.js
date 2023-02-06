import React from 'react'

import {Router, Link} from "react-router-dom";
function Leftnav() {
  return (
   <>
     <div className="left pt-5">
      <nav className="nav flex-column">
      <div className='sidebar'> 
         <a className="nav-link  text-left " href="custmlist">Customer list</a>
         <a className="nav-link text-left active" aria-current="page" href="cardetails">Car Details </a>
         <a className="nav-link  text-left " href="workpro">Work Progress</a>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Leftnav
