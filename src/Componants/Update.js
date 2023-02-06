import React from 'react'
import {useState , useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { adduser,userlist } from '../features/counter/counterSlice';
const Update = (props) => {
  const jadhavtext  = useSelector((state) => state.alluserdata);
 

  const [data, setData] = useState([]);
  const [UserRegistration , setUserRegistration] = useState({
    firstname:"",
    lastname:"",
    carno:"",
    carmodel:"",
    phoneno:""
  });
  
  const [list , setList] = useState([])
  const dispatch = useDispatch()

  useEffect(() => { 
    if(jadhavtext?.user?.lists == undefined || jadhavtext?.user?.lists == "" ){
      
   }else{

    console.log('Yeswin33',jadhavtext?.userid)
     setData(jadhavtext?.user?.lists); 
     dataload(jadhavtext?.userid); 

} 
},[data,jadhavtext?.user?.lists,props.key2,jadhavtext?.userid]); 

const HandleInput = (e) =>{
 const name = e.target.name;
 const value=e.target.value;
/*  console.log("Enter",name,value) */
 setUserRegistration({...UserRegistration ,[name] : value});

};

const FormSubmissinHandler = event=>{

  event.preventDefault();

  const newUserList = {...UserRegistration };
  
  //list.push(newUserList);
  const lists = [...data];
 // lists.splice(updateid,1);
  lists [jadhavtext?.userid] = newUserList;
  
  //console.log("Enter",lists)
  dispatch(adduser({lists}));
  dispatch(userlist());

}



const dataload = (id)=>{

 // console.log('id',id)
 // dispatch(userlist());
//  dispatch(adduseridget());
 
  setUserRegistration(
    {
      firstname:data[id]?.firstname,
      lastname:data[id]?.lastname,
      carno:data[id]?.carno,
      carmodel:data[id]?.carmodel,
      phoneno:data[id]?.phoneno
    }
  )
}

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
                
                   <button type="submit" className="btn btn-primary mt-3" data-bs-dismiss="modal" aria-label="Close">Update</button> 
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
