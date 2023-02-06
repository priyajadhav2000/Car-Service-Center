import React, { useState,useEffect } from "react";
import ModalWindow from "../Componants/ModalWindow";
import ModalWindowaddpag from "../Componants/ModalWindowaddpage";
import ModalWindowaUpdatepag from "../Componants/ModalWindowUpdatepage";
import { useSelector, useDispatch } from "react-redux";
import { adduserid,adduseridget } from "../features/counter/counterSlice";




function Userlist(props) {

  const jadhavtext  = useSelector((state) => state.alluserdata);
  const [deleteid, setDeleteid] = useState("");
  const [data, setData] = useState();
  const [dataload, setDataload] = useState(false);
  

 // const list = useSelector((state) => state.alluserdata.value);
  //const userList = useSelector((state) => state.alluserdata.userList);

  //const jadhavtext = useSelector((state) => state.alluserdata.value);
  const dispatch = useDispatch();

   useEffect(() => {
        if(jadhavtext?.user?.lists == undefined || jadhavtext?.user?.lists == "" ){
        //  console.log('no');
          setDataload(false);
       }else{
      setData(jadhavtext?.user?.lists);
      setDataload(true);
    //  console.log('listeeee',data?.length)
     // data?.map((item) => ( console.log('ppp1',item.firstname))) 

 } 
  },[data,jadhavtext?.user?.lists,jadhavtext?.useridx]); 



  const DeleteHandler = (id) => {
/* const num = [1,2,3,4];
    console.log(data)
    data.splice(0,1);
    console.log('Delete',data) */
    //setDeleteid(id);
    //alert(id);
  };

  const UpdateHandler = (id) => {
    dispatch(adduserid(id));
    dispatch(adduseridget());
  };


    //setData(jadhavtext?.userinfo);

  return (
    <div  style={{height: '100vh'}}>
   
      <ModalWindowaddpag />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Car Number</th>
            <th scope="col">Car Model</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/*   onClick={DeleteHandler(key+1)} */}

         {dataload == true ? data?.map((item,key) => ( 
                      <>
                      {" "}
                      <tr>
                        <th scope="row">{key + 1}</th> 
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.carno}</td>
                        <td>{item.carmodel}</td>
                        <td>{item.phoneno}</td>
                        <td>
        
          
                       <ModalWindowaUpdatepag key2={key} /> 
                          <ModalWindow deleteid={key} /> 
                        
                        </td>
                      </tr>
                    </>
         )) : null}

        </tbody>
      </table>
     

     
{/*       User info = {jadhavtext?.userinfo.firstname}
  <button onClick={() => dispatch(userlist())} > Get List rrrr</button>  */}
    </div>
  );
}

export default Userlist;
