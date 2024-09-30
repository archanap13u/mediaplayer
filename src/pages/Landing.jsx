import React from 'react'
import {Row ,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {

  return (
    <>
   <div className='container-fluid p-5'>
    <Row>
      <Col>
      <h1>MediaPlayer</h1>
      <p style={{textAlign:'justify'}}>readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    <div className='d-grid'>
    <Link to={'/dash'} className='btn btn-success'>Let's Go</Link>

    </div>
      </Col>
      <Col>
      <img src='https://cdni.iconscout.com/illustration/free/thumb/free-youtube-creator-awards-illustration-download-in-svg-png-gif-file-formats--play-button-achievement-vlogger-gold-marketing-pack-people-illustrations-3561284.png' className='img-fluid' alt="landing"></img>
      </Col>
    </Row>

   </div>
   <div className='container-fluid p-5 mt-3'>
    <h4 className='text-center mb-3'>Features</h4>
    <div className='row justify-content-around'>
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://cdn.dribbble.com/users/2105902/screenshots/10857439/media/4602eb39dc6b0afb26ccfb35df782924.gif" />
      <Card.Body>
        <Card.Title>Simple Upload</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img  style={{height:'200px'}} className='img-fluid p-0' variant="top" src="https://miro.medium.com/v2/resize:fit:1400/0*YGPHb9m4Sa6HON_u.gif" />
      <Card.Body>
        <Card.Title>Watch Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img  style={{height:'200px'}} variant="top" src="https://cdn.dribbble.com/users/77098/screenshots/2485682/main-icons_2.gif"  className='img-fluid p-0'/>
      <Card.Body>
        <Card.Title>Categories</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    
    </div>
   </div>
   <div className='container-fluid p-5 '>
    <Row>
      <Col md={8}>
      <h3>Simple And Faster</h3>
      <p style={{textAlign:'justify'}}>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p> </Col>
      <Col md={4}>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/a3Ue-LN5B9U?si=64WAx1PSiO868HPx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Col>
    </Row>
   </div>
   </>
  )
}

export default Landing