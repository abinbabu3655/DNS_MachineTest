import React, { useState } from "react";
import Categories from "../Components/Categories/Categories";
import ProductTable from "../Components/ProductTable/ProductTable";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import classes from "./PageStyling.module.css";

const SecondPage = () => {
  const location = useLocation();
  const [subcat, setSubcat] = useState([]);
  const [ProductsData, setProductsData] = useState([]);
  const [productTotalCount, setProductTotalCount] = useState(0);

  const navigate = useNavigate();

  const getDatas = async () => {
    const response = await axios.get(
      `http://localhost:5000/getsubcategories/${location.state.catId}`
    );
    console.log("sss988", response.data.SubCategories);
    setSubcat(response.data.SubCategories);
    setProductsData(response.data.Products);
    // console.log(response.data)
  };
  const getProductCounts = () => {
    setProductTotalCount(ProductsData.length);
  };
  useEffect(() => {
    getDatas();
    getProductCounts();

  }, [ProductsData]);

  return (
    <div className={classes.main}>
      <h1>
        {location?.state.cat}({productTotalCount})
      </h1>
      <Categories>
        {subcat.map((subcat) => {
          const products = ProductsData.filter((products) => {
            return products.subcategory === subcat._id;
          });

          return (
            <button
              onClick={() =>
                navigate("/third", {
                  state: { scId: subcat._id, scName: subcat.subcategoryname },
                })
              }
            >
              {" "}
              {subcat.subcategoryname} ({products.length})
            </button>
          );
        })}
      </Categories>
      <ProductTable prodData={ProductsData} />
    </div>
  );
};

export default SecondPage;
