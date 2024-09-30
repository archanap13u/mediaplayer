import axios from "axios";
const base_url="http://localhost:3000"
export const addVideoApi=async(data)=>{
    return await axios.post(`${base_url}/Videos`,data)
}

export const getVideoApi= async()=>{
    return await axios.get(`${base_url}/videos`)
}
export const deleteVideoApi=async(id)=>{
    return await axios.delete(`${base_url}/videos/${id}`)
}
export const addCategory=async(data)=>{
    return await axios.post(`${base_url}/categories `,data)
}
export const getcategory=async()=>{
    return await axios.get(`${base_url}/categories`)
}
export const deletecategory=async(id)=>{
    return await axios.delete(`${base_url}/categories/${id}`)
}
export const addhistoryApi=async(data)=>{
    return await axios.post(`${base_url}/history`,data)
}
export const gethistoryApi=async()=>{
    return await axios.get(`${base_url}/history`)
}
export const deletehistory=async(id)=>{
    return await axios.delete(`${base_url}/history/${id}`)
}

export const addvideotocategory=async(data,id)=>{
    return await axios.put(`${base_url}/categories/${id}`,data)
}