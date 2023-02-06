import React from 'react'
import {useState} from 'react'
import Userlist from '../Pages/Userlist';
import { useSelector, useDispatch } from 'react-redux';
import { adduser } from '../features/counter/counterSlice';
import Leftnav from './leftnav';

const updateinfo =
    {
    firstname: 'Olive',
    lastname: 'Yew',
    email: 'olive@test.com',
    carmodel: 'Honda Gt',
    phoneno: '9800000000',
    }
    



const Update = () => {
  const [UserRegistration , setUserRegistration] = useState({
    firstname:updateinfo.firstname,
    lastname:updateinfo.lastname,
    email:updateinfo.email,
    carmodel:updateinfo.carmodel,
    phoneno:updateinfo.phoneno
  });




const HandleInput = (e) =>{
 const name = e.target.name;
 const value=e.target.value;
/*  console.log("Enter",name,value) */

 setUserRegistration({...UserRegistration ,[name] : value});

};

const FormSubmissinHandler = event=>{
  event.preventDefault();
  const newUserList = {...UserRegistration , id:new Date().getTime().toString};
  //console.log("add form =",newUserList);
 
}


const dispatch = useDispatch()

  return (
    <>

{/* <Userlist/> */}
      <span id="headline"><h5>Update</h5></span>
      <div className="col-sm-7 offset-md-2">

        <div className="container text-center">

          <div className="row justify-content-center">
            <div className="formmain col-sm-9">
              <form className="row" onSubmit={FormSubmissinHandler}>

                <div className="">
                  <label htmlFor="firstname" className="form-label mb-1">First Name</label>
                  <input type="text" className="form-control mb-3" id="firstname" name="firstname" placeholder="First name" value={UserRegistration.firstname} onChange={HandleInput}/>
                </div>
                <div className="">
                  <label htmlFor="lastname" className="form-label mb-1" >Last Name</label>
                  <input type="text" className="form-control mb-3" id="lastname" name="lastname" placeholder="Last name" value={UserRegistration.lastname}  onChange={HandleInput}/>
                </div>
                <div className="">
                  <label htmlFor="email" className="form-label mb-1" >Email</label>
                  <input type="email" className="form-control mb-3" id="email" name="email" placeholder="Email" value={UserRegistration.email}  onChange={HandleInput}/>
                </div>

                <div className="col-12">
                  <label htmlFor="carmodel" className="form-label mb-1">Car Model</label>
                  <input type="text" className="form-control mb-3" id="carmodel" name="carmodel" placeholder="Enter Number CarModel"  value={UserRegistration.carmodel}  onChange={HandleInput}/>
                </div>
                <div className="col-12">
                  <label htmlFor="phoneno" className="form-label mb-1" >Phone Number</label>
                  <input type="text" className="form-control mb-3" id="phoneno" name="phoneno" placeholder="Enter Number" value={UserRegistration.phoneno}  onChange={(HandleInput)}/>
                </div>

                <div className="col-12">
                 <button type="submit" className="btn btn-primary mt-3" >Submit</button> 
                </div>
                <div className="col-12">
                </div>

                
              </form>
          </div>
          </div>

          
        </div>



    </div>

    </>
  )
}

export default Update
