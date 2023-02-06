import React from 'react'

const  HeaderNav  = () => {
  return (

    <div>
   <nav className="navbar navbar-expand-sm bg-dark navbar-dark new_background">
      <div className="container-fluid ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default HeaderNav;