import React from 'react'
import './ProductTable.module.css'

function ProductTable() {
  return (
    <div>
     <table>
  <tr>
    <th><input type='checkbox' /></th>
    <th>Product name</th>
    <th>Price</th>
  </tr>
  <tr>
  <td><input type='checkbox' /></td>
    <td>Product 1</td>
    <td>$10</td>
  </tr>
  <tr>
  <td><input type='checkbox' /></td>
    <td>Product 2</td>
    <td>$20</td>
  </tr>
</table>
    </div>
  )
}

export default ProductTable
