import React from "react";
import "./ProductTable.module.css";

function ProductTable({ prodData }) {
  return (
    <table>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        <th>Product name</th>
        <th>Price</th>
      </tr>

      {prodData.map((data) => {
        return (
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>{data.productname}</td>
            <td>${data.price}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default ProductTable;
