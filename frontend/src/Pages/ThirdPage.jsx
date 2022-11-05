import React, { useState } from "react";
import Categories from "../Components/Categories/Categories";
import ProductTable from "../Components/ProductTable/ProductTable";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import classes from "./PageStyling.module.css";

const ThirdPage = () => {
  const location = useLocation();
  const [subsubcat, setsubsubcat] = useState([]);
  const [ProductsData, setProductsData] = useState([]);
  const navigate = useNavigate();

  const getDatas = async () => {
    const response = await axios.get(
      `http://localhost:5000/getsubsubcategories/${location.state.scId}`
    );

    setsubsubcat(response.data.SubSubCategories);
    setProductsData(response.data.Products);
    //console.log(response.data)
  };
  useEffect(() => {
    getDatas();
  }, []);
  const productTotalCount = ProductsData.length;

  return (
    <div className={classes.main}>
      <h1>
        {location?.state.scName}({productTotalCount}){" "}
      </h1>
      <Categories>
        {subsubcat.map((subsubcat) => {
          const products = ProductsData.filter((products) => {
            return products.sscategory === subsubcat._id;
          });

          return (
            <button onClick={() => navigate("/last", { state: subsubcat._id })}>
              {" "}
              {subsubcat.subSubcategoryname} ({products.length})
            </button>
          );
        })}
      </Categories>
      <ProductTable prodData={ProductsData} />
    </div>
  );
};

export default ThirdPage;
