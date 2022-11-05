import React, { useState } from 'react'
import Categories from '../Components/Categories/Categories'
import ProductTable from '../Components/ProductTable/ProductTable'
import {useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'



const LastPage = () => {

const location=useLocation();

const [ProductsData,setProductsData] = useState([])


const getDatas=async ()=>{

  
  const response = await axios.get(`http://localhost:5000/getcatproducts/${location.state}`)

 
  setProductsData(response.data.Products)


}
useEffect(()=>{

  getDatas()

 },[])
 


  return (
    <>
    
    <ProductTable prodData={ProductsData}/>
    </>
  )
}

export default LastPage
