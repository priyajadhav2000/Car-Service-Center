import React from 'react'
import AddUser from './AddUser';
import {useRef, useEffect} from 'react';
<script type="text/javascript" src="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>  
const ModalWindowaddpag = () => {
  const ref = useRef(null);
    
  useEffect(() => {
    const element = ref.current;

     /* element.id.modal('show') */

/*     console.log("element",element);
    console.log("id",element.id); */
  }, []);
  return (
    <>





<div class="container-fluid">
<div class="row justify-content-end">
    <div class="col-2 text-end">
    <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add User</button>  
    </div>
  </div>
</div>

<div className="modal fade " id="exampleModal" ref={ref} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Data</h1> */}
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div className="modal-body">
      <AddUser/>
      </div>

    </div>
  </div>
</div>





    </>
  )
}

export default ModalWindowaddpag
