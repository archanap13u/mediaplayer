import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Add from '../components/Add'
import Videos from '../components/Videos'
import Categorys from '../components/Categorys'
import { Link } from 'react-router-dom'



function Dashboard() {
  const [result,setResult]=useState({})
  return (
    <>
    <div className='my-3 d-flex justify-content-between'>
      <h2>Videos</h2>
      <Link to={'/his'}>Watch History</Link>
    </div>
    <div className='container-fluid'>
      <Row>
        <Col md={1}>
        <Add setresult={setResult}/>
        </Col>
        <Col md={8}>
        <Videos result={result}/>
        </Col>
        <Col md={3}>
       <Categorys/>
        </Col>
      </Row>
    </div>
    </>
    
  )
}

export default Dashboard