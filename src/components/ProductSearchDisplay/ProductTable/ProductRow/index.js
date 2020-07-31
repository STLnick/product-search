import React from 'react'

export const ProductRow = ({ products }) => products.map(product => (
  <tr key={product.name}>
    <td>{product.name}</td>
    <td>{product.price}</td>
  </tr>
))
