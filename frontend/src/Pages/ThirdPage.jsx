import React, { useState } from 'react'
import Categories from '../Components/Categories/Categories'
import ProductTable from '../Components/ProductTable/ProductTable'
import {useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'



const ThirdPage = () => {

const location=useLocation();
const [subsubcat,setsubsubcat] = useState([]);
const [ProductsData,setProductsData] = useState([])
const navigate = useNavigate()

const getDatas=async ()=>{

  console.log("hello");
  const response = await axios.get(`http://localhost:5000/getsubsubcategories/${location.state}`)

  setsubsubcat(response.data.SubSubCategories)
  setProductsData(response.data.Products)
  //console.log(response.data)

}
useEffect(()=>{

  getDatas()

 },[])
 
console.log(subsubcat);

  return (
    <>
    <h1>{location?.state} </h1>
    <Categories >

{
  subsubcat.map((subsubcat)=>{
  
   
 return  <button onClick={()=>navigate('/last',{state:subsubcat._id})}> {subsubcat.subSubcategoryname} </button> 
  })
}

    

    </Categories>
    <ProductTable prodData={ProductsData}/>
    </>
  )
}

export default ThirdPage
