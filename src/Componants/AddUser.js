import React from 'react'
import {useState} from 'react'
import Userlist from '../Pages/Userlist';
import { useSelector, useDispatch } from 'react-redux';
import { adduser,userlist } from '../features/counter/counterSlice';
import Leftnav from './leftnav';
const AddUser = () => {


  const data  = useSelector((state) => state.alluserdata.value);


  const [UserRegistration , setUserRegistration] = useState({
    firstname:"",
    lastname:"",
    carno:"",
    carmodel:"",
    phoneno:""
  });
  
  const [list , setList] = useState([])
  const dispatch = useDispatch()
  

const HandleInput = (e) =>{
 const name = e.target.name;
 const value=e.target.value;
/*  console.log("Enter",name,value) */
 setUserRegistration({...UserRegistration ,[name] : value});

};

const FormSubmissinHandler = event=>{
  event.preventDefault();

  const newUserList = {...UserRegistration };
  list.push(newUserList);
  //console.log("Enter1",list)
  const lists = [ ...list];
  
  console.log("Enter2",lists)

  dispatch(adduser({lists}));
  dispatch(userlist());
 

  setUserRegistration(
    {
      firstname:"",
      lastname:"",
      carno:"",
      carmodel:"",
      phoneno:""
    }
  )
}



  return (
    <>
  

{/* <Userlist/> */}
      <span id="headline"><h5>Add New Custemar</h5></span>
     
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
                  <label htmlFor="carno" className="form-label mb-1" >Car Number</label>
                  <input type="text" className="form-control mb-3" id="carno" name="carno" placeholder="carno" value={UserRegistration.carno}  onChange={HandleInput}/>
                </div>

                <div className="col-12">
                  <label htmlFor="carmodel" className="form-label mb-1">Car Model</label>
                  <input type="text" className="form-control mb-3" id="carmodel" name="carmodel" placeholder="Enter carmodel"  value={UserRegistration.carmodel}  onChange={HandleInput}/>
                </div>
                <div className="col-12">
                  <label htmlFor="phoneno" className="form-label mb-1" >Phone Number</label>
                  <input type="text" className="form-control mb-3" id="phoneno" name="phoneno" placeholder="Enter number" value={UserRegistration.phoneno}  onChange={(HandleInput)}/>
                </div>

                <div className="col-12">
                   <button type="submit" className="btn btn-primary mt-3" data-bs-dismiss="modal" aria-label="Close">Submit</button> 
                </div>
                <div className="col-12">
{/*                   <button type="submit" className="btn btn-primary mt-3" onClick={() => dispatch(adduser({
                 adduserdata
             }))}>Redux Submit</button> */}
                </div>

              </form>
          </div>
          </div>

          
        </div>



    </div>

    </>
  )
}

export default AddUser
