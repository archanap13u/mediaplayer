import React,{useState,useEffect} from 'react'
import { getcategory ,deletecategory,addvideotocategory,} from '../services/Allapi'
import { toast } from 'react-toastify'
import Videocard from './Videocard'

function Categorylist(category) {
    const [catlist,setcatlist]=useState([])
    const[delcat,setdelcat]=useState({})
    useEffect(()=>{
        getcat()
    },[category,delcat])
    const getcat=async()=>{
        const result=await getcategory()
        if(result.status==200){
            setcatlist(result.data)
            console.log(result.data)
           

        }


    }
    const deletecat= async(id)=>{
        const result=await deletecategory(id)
        if(result.status==200){
            setdelcat(result)
        }
    }

   
    const handleDragOver=(e)=>{
        e.preventDefault()
        console.log("Dragging Over")
    }
    const handleDrop=async(e,cat)=>{
        console.log("dropped!!!")
        const video=JSON.parse(e.dataTransfer.getData('video'))
        console.log(video);
        cat.videos.push(video)
        const result=await addvideotocategory(cat,cat.id)
        if(result.status==200){
            toast.success("video added to category")
            getcat()

        }
        else{
            toast.error("failed")
        }
       

    }
  return (
    <>
     <div className='border shadow border-3 border-dark p-5'>
        {
            catlist.length>0?
            <div>
                {catlist.map(item=>(
                    <div className='border border-2 shadow w-100 mb-4' onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,item)}>
                        <div className='d-flex justify-content-between p-2 '>
                            <h3>{item.category}</h3>
                            <button className='btn' onClick={()=>{deletecat(item.id)}}><i className="fa-solid fa-trash" style={{color: "#e40707",}} /></button>
                            </div>
                        <div className='p-1 border'>
                            {
                                item.videos.length>0 &&
                                item.videos.map(item=>(
                                    <Videocard video={item} cond={true} />
                                ))
                            }
                            </div>

                    </div>
                ))}
            </div>
            :
            <h3 className='text-danger'>No categories</h3>
        }

    </div>
    </>
   
  )
}

export default Categorylist