import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adduserid,adduseridget,userlist,adduser} from "../features/counter/counterSlice";

const ModalWindow = (props) => {

  const jadhavtext7  = useSelector((state) => state.alluserdata);
  const [deleteid, setDeleteid] = useState("");
  const [data1, setData1] = useState([]);
  const dispatch = useDispatch();


  const deleteuser = ()=>{
   
    console.log('Yeswin44',jadhavtext7?.userid)
   const lists= [...jadhavtext7?.user?.lists];
    console.log('hi1',jadhavtext7.user?.lists);
    lists.splice(props.deleteid,1);
    console.log('hi2',lists);
    dispatch(adduser({lists}));
  
  //  dispatch(userlist());

  }


  return (
    <>

{/* <button onClick={deleteuser}>del</button> */}
 <button  type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>  

<div className="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Data</h1> */}
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div className="modal-body">
      <h5>Are you sure you want to delete the User</h5>
      {/*  {props.deleteid} */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">NO</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={deleteuser} >YES</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ModalWindow
