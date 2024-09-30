import React from 'react'
import{Row,Col} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='bg-info'>
    <Row className=' p-5 mt-4' >
      <Col sm={4} >
      <h2>MEDIAPLAYER 2024</h2>
    
<p style={{textAlign:'justify'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
      </Col>
      <Col sm={4} style={{paddingLeft:'25px'}}>
      <h2>LINKS</h2>
      <div className='d-flex flex-column'>
      <Link to="/" style={{textDecoration:'none'}}>LANDING</Link>
      <Link to="/dash" style={{textDecoration:'none'}}>Dashboard</Link>
      <Link to="/his" style={{textDecoration:'none'}}>WATCH HISTORY</Link>
      </div>
      
      </Col>
   
      <Col sm={4}>
      <h2>CONTACT US</h2>
      <p>mediaplayer2024@gmail.com</p>
      <textarea className= ' form-control w-75'></textarea><br></br>
      <Button style={{backgroundColor:'purple ', borderRadius:'5PX'}} className='mt-2'>Send</Button>
      
        
        </Col>
       
    </Row>
    <p className='text-center'>MEDIAPLAYER 2024 &copy ALL RIGHTS RESERVED</p>
      </div>

      </>
  )
}

export default Footer