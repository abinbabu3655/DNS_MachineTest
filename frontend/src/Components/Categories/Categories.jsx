import React from "react";
import classes from "./Categories.module.css";

function Categories(props) {
  return <div className={classes.categorybox}>{props.children}</div>;
}

export default Categories;
