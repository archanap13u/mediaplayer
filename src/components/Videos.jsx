import React ,{useEffect ,useState}from 'react'
import Videocard from './Videocard'
import { getVideoApi } from '../services/Allapi'


function Videos(result) {
  const [resp,setresp]=useState({})
  
  const [data,setData]=useState([])
  useEffect(()=>{
getData()
  },[result,resp])


  const getData=async ()=>{
    const result= await getVideoApi()
console.log(result)
if(result.status==200){
  setData(result.data)
}

  }
  return (
    < >
    <div className='container-fluid border border-3 border-dark shadow p-1'>
      {
        data.length>0?
        <div className='row p-2'>
          {data.map(item=>(
              
              <Videocard video={item} res={setresp}/>
          ))}
          </div>
          :
          <h4 className='text-danger text-center'>No Videos Available!!</h4>
      }

     
    </div>
    
    </>
  )
}

export default Videos