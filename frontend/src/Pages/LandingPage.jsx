import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../Components/Categories/Categories";
import ProductTable from "../Components/ProductTable/ProductTable";
import axios from "axios";
import classes from "./PageStyling.module.css";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [ProductsData, setProductsData] = useState([]);
  const [productTotalCount, setProductTotalCount] = useState(0);
  const navigate = useNavigate();

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/");
    setData(response.data.Categories);
    setProductsData(response.data.Products);
  };
  const getProductCounts = () => {
    setProductTotalCount(ProductsData.length);
  };
  useEffect(() => {
    getData();
    getProductCounts();
  }, [ProductsData]);

  return (
    <>
      <div className={classes.main}>
        <h1>Categories({productTotalCount})</h1>
        <Categories>
          {data.map((category) => {
            const products = ProductsData.filter((products) => {
              return products.category === category._id;
            });
            return (
              <button
                onClick={() =>
                  navigate("/second", {
                    state: { catId: category._id, cat: category.categoryName },
                  })
                }
              >
                {" "}
                {category.categoryName} ({products.length})
              </button>
            );
          })}
        </Categories>
        <ProductTable prodData={ProductsData} />
      </div>
    </>
  );
};

export default LandingPage;
