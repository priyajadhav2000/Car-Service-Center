import React from 'react'
import {useState} from 'react'

const EntryForm = () => {
  const [UserRegistration , setUserRegistration] = useState({
    firstname:"",
    lastname:"",
    email:"",
    carmodel:"",
    phoneno:""
  });
  const [List , setList] = useState([]);

const HandleInput = (e) =>{
 const name = e.target.name;
 const value=e.target.value;
 //console.log(name,value)

 setUserRegistration({...UserRegistration ,[name] : value});

};

const FormSubmissinHandler = event=>{
  event.preventDefault();
  const newUserList = {...UserRegistration , id:new Date().getTime().toString};
  console.log(List);
  setList([...List , newUserList]);
  //console.log(List);

  setUserRegistration({firstname:" ",lastname:" " ,email:" ", carmodel:" " , phoneno:"" });
  
  //alert(Lasttname);
}

  return (
    <>
    <div className="container main ">
  <div className="row">
    <div className="col-sm-2 left pt-5">
      <nav className="nav flex-column">
        <a className="nav-link active" aria-current="page" href="/">New Customar</a>
        <a className="nav-link" href="#">Custemar list</a>
      </nav>
    </div>
    <div className="col-sm-10 pt-5">
      <h5>Add New Custemar</h5>

      <div className="col-sm-12 ">

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
                  <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </div>
              </form>
          </div>
          </div>

          
        </div>



    </div>
    </div>
  </div>
</div>
    </>
  )
}

export default EntryForm
