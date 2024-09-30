import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../services/Allapi';
import Categorylist from './Categorylist';


function Categorys() {
  
  const [cat,setcat]=useState("")//to addd category
const [refr,setrefr]=useState({})
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleadd=async()=>{
    // console.log(cat)
    if(!cat)
    {
      toast.warning("enter valid input!!")
    }
    else{
      const result=await addCategory({category:cat,videos:[]})
      if(result.status==201){
        toast.success("Category added")
        setcat("")
        handleClose()
      }
      else{
        toast.error("adding failed")
        console.log(result)
      }

    }
  

  }

  return (
    <>
    <div className='d-grid'>
    <Button className='btn btn-info ' style={{borderRadius:'3px'}} onClick={handleShow}> Add Category</Button>

    </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingid"
        label="Catergory Id"
        className="mb-3"
      >
        <Form.Control type="text"  onChange={(e)=>{setcat(e.target.value)}} placeholder="name@example.com" />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant='success' onClick={handleadd}>Add</Button>
         
        </Modal.Footer>
      </Modal>

<Categorylist category={refr}/>
    </>
   
  )
}

export default Categorys