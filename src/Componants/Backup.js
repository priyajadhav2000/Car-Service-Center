import './App.css';
import "./Componants/main.css";
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Home  from "./Componants/Home";
import AboutUs from './Componants/AboutUs';
import Contact from './Componants/Contact';
import Service from './Componants/Service';

import AddUser from './Componants/AddUser';
//import CustomerList from './Componants/CustomerList';


function App() {
  return (
    <>
     <Router>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark new_background">
      <div className="container-fluid ">
        <ul className="navbar-nav">
          <li className="nav-item">
          <link to="/">Home</link>
          </li>
          <li className="nav-item">
          <link to="/about">About Us</link>
          </li>
          <li className="nav-item">
          <link to="/services">Services</link>
          </li>
          <li className="nav-item">
          <link to="/contact">Contact</link>
          </li>
          <li className="nav-item">
          <link to="/addcustomer">Add Customer</link>
          </li>
          <li className="nav-item">
          <link to="/customerlist">customer List</link>
          </li>
        </ul>
        </div> 
    </nav>
    <Route exact path='home'> 
      <Home></Home>
    </Route>
    <Route path='service'> 
      <Service></Service>
    </Route>
    <Route path='about'> 
      <AboutUs></AboutUs>
    </Route>
    <Route path='contact'> 
      <Contact></Contact>
    </Route>
    <Route path='about'> 
      <AboutUs></AboutUs>
    </Route>
    </Router>
    {/* <CustomerList></CustomerList> */}


    <AddUser></AddUser>

<div className="mt-5 p-4 bg-dark text-white text-center">
  <p>  <div className="footer-clean">
        <footer>
            <div className="container">
            <div>
                    
                <div className="row justify-content-center address">
                    <div className="col-sm-4 col-md-3 item ">
                    <h4>CAR FYX</h4>
                      <p>3rd ,Floor ,Land Mark Tower<br/>
                      North City ,Loha Gaon,Pune</p>
                    </div>
                    
                    <div className="col-sm-4 col-md-3 item">
                    
                        <ul>
                            <li><a href="/">Email</a></li>
                            <li><a href="/">Phone Number</a></li>
                            <li><a href="/">Working Days</a></li>
                            <li><a href="/">Working Hours</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        
                        <ul>
                            <li><a href="/">car.fyx@gmail.com</a></li>
                            <li><a href="/">99999999999</a></li>
                            <li><a href="/">Monday - Sunday</a></li>
                            <li><a href="/">8AM TO 9PM</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="item social"><a href="/"><i className="icon ion-social-facebook"></i></a><a href="/"><i className="icon ion-social-twitter"></i></a><a href="/"><i className="icon ion-social-snapchat"></i></a><a href="/"><i className="icon ion-social-instagram"></i></a>
                        <p className="copyright">Car Fyx Pvt. Ltd. © 2023 . All rights reserved</p>
                    </div>
            </div>
        </footer>
    </div></p>
</div>

</>
  );
}

export default App;
