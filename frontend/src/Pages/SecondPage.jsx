import React, { useState } from 'react'
import Categories from '../Components/Categories/Categories'
import ProductTable from '../Components/ProductTable/ProductTable'
import {useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'



const SecondPage = () => {

const location=useLocation();
const [subcat,setSubcat] = useState([]);
const [ProductsData,setProductsData] = useState([])
const navigate = useNavigate()

const getDatas=async ()=>{

  console.log("hello");
  const response = await axios.get(`http://localhost:5000/getsubcategories/${location.state}`)
  console.log('sss988',response.data.SubCategories);
  setSubcat(response.data.SubCategories)
  setProductsData(response.data.Products)
  // console.log(response.data)

}
useEffect(()=>{

  getDatas()

 },[])
 


  return (
    <>
    <h1>{location?.state} </h1>
    <Categories >

{
  subcat.map((subcat)=>{
  
   
 return  <button onClick={()=>navigate('/third',{state:subcat._id})}> {subcat.subcategoryname} </button> 

  })
}

    

    </Categories>
    <ProductTable prodData={ProductsData}/>
    </>
  )
}

export default SecondPage
