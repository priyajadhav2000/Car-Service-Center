            import './App.css';
            import "./Componants/main.css"
            import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
            import Update from './Componants/Update';
            import Home  from "./Componants/Home";
            import AboutUs from './Componants/AboutUs';
            import Contact from './Componants/Contact';
            import WorkProgress from './Componants/WorkProgress';
            import CarDetails from './Componants/CarDetails';
            import Service from './Componants/Service';
            import HeaderNav from './Componants/HeaderNav';
            import Footer from './Componants/footer';


            import AddUser from './Componants/AddUser';
            import Userlist from './Pages/Userlist';

            import Leftnav from './Componants/leftnav';
            //import CustomerList from './Componants/CustomerList';


            function App() {
              return (
                <>
                  {/*  Router section end */}


            <HeaderNav/>
            <Router>  
                      <div className="App">   
                      <div className="container main ">
                        <div className="row">
                                <div className="col-sm-2 pt-5" id="leftbar">
                                <Leftnav/>
                                </div>
                                <div className="col-sm-10 pt-5">
                                <Routes>  
                           <Route exact path='/' element={< Home />}></Route>  
                            <Route exact path='/add' element={< AddUser />}></Route>  
                            <Route exact path='/list' element={< Userlist />}></Route>
                            <Route exact path='/update' element={< Update />}></Route>  
                            <Route exact path='/about' element={< AboutUs />}></Route> 
                            <Route exact path='/services' element={< Service />}></Route>
                            <Route exact path='/custmlist' element={< Userlist />}></Route>   
                            <Route exact path='cardetails' element={< CarDetails />}></Route>  
                            <Route exact path='workpro' element={< WorkProgress/>}></Route>   
                            <Route exact path='/contact' element={< Contact />}></Route>    
                            
                      </Routes>  
                                </div>
                          </div>
                      </div>
              


                      </div>  
                  </Router>  
            <Footer/>
            </>
              );
            }

            export default App;
