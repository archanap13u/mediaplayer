import React ,{useState,useEffect}from 'react'
import { Button } from 'react-bootstrap'
import { gethistoryApi } from '../services/Allapi'
import { deletehistory } from '../services/Allapi'


function History() {
  const [gethis,setgethis]=useState([])

  const[resp,setresp]=useState({})
  useEffect(()=>{
    getData()
  },[resp])
  const getData=async()=>{
    const result=await gethistoryApi()
    if(result.status==200){
      setgethis(result.data)
      console.log(result.data)
    }
  }

  const deletehis=async(id)=>{
    const result=await deletehistory(id)
    if(result.status==200){
      setresp(result)
    }
  }
  return (
    <>
    <h2>Watch History</h2>
    {
      gethis.length>0?
      <table className='table table-dark'>
      <thead>
        <tr>
          <td> ID</td>
          <td>Title</td>
          <td>Video URL</td>
          <td>Date and Time</td>
          <td></td>
        </tr>
        </thead>
        <tbody>
        
          {
            gethis.map(item=>(
              
          <tr>
            <td>{item.vid}</td>
            <td>{item.title}</td>
            <td>{item.url}</td>
            <td>{item.Date}</td>
            <td>
            <Button  variant=''onClick={()=>{deletehis(item.id)}}><i className="fa-solid fa-trash" style={{color: "#fc1d1d",}} /></Button>
            </td>
          </tr>

    ))
          }
          </tbody>
          </table>
          :
          <h1>  No history</h1>

          
    }
   
       
     
      
   
    </>
  )
}

export default History