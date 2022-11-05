import React, { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Categories from '../Components/Categories/Categories'
import ProductTable from '../Components/ProductTable/ProductTable'
import axios from 'axios'
import {Link} from 'react-router-dom'

const LandingPage = () => {

  const [data,setData] = useState([])
  const [ProductsData,setProductsData] = useState([])
  const navigate= useNavigate()

  const getData=async ()=>{

    console.log("hello");
    const response = await axios.get('http://localhost:5000/')
    setData(response.data.Categories)
    setProductsData(response.data.Products)
  
  }
  useEffect(()=>{

   getData();

  },[])
  
 console.log("hiiiiiiii",data);

 console.log("productttt data",ProductsData);


  return (
    <>
    <h1>Categories</h1>
    <Categories >

{  data.map((category)=>{ 

 return  <button onClick={()=>navigate('/second',{state:category._id})}> {category.categoryName} </button> 
}

)}
    </Categories>


    <ProductTable prodData={ProductsData} />

    </>
  )
}

export default LandingPage
