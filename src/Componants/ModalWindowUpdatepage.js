import React from 'react'
import Update from './Update'
import  { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adduserid,adduseridget } from "../features/counter/counterSlice";

const ModalWindowaUpdatepag = (props) => {
//  console.log('Yeswin1',props.key2)
  const dispatch = useDispatch();
const san = () =>{
  dispatch(adduserid(props?.key2));
  dispatch(adduseridget());
}
  return (
    <>


 <button onClick={san} type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
Edit </button>  

<div className="modal  fade " id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Data</h1> */}
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div className="modal-body">
        <Update key2={props.key2}/> 
      </div>

    </div>
  </div>
</div>
    </>
  )
}

export default ModalWindowaUpdatepag
