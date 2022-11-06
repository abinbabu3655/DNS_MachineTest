import React, { useState } from "react";
import ProductTable from "../Components/ProductTable/ProductTable";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import classes from "./PageStyling.module.css";

const LastPage = () => {
  const location = useLocation();
  const [ProductsData, setProductsData] = useState([]);
  const [productTotalCount, setProductTotalCount] = useState(0);

  const getDatas = async () => {
    const response = await axios.get(
      `http://localhost:5000/getcatproducts/${location.state}`
    );
    setProductsData(response.data.Products);
  };
  const getProductCounts = () => {
    setProductTotalCount(ProductsData.length);
  };

  useEffect(() => {
    getDatas();
    getProductCounts();

  }, [ProductsData]);

  return (
    <div>
      <div className={classes.main}>
        <h1>Products({productTotalCount})</h1>
        <ProductTable prodData={ProductsData} />
      </div>
    </div>
  );
};

export default LastPage;
