import React from 'react'
import PropTypes from 'prop-types'

export const ProductRow = ({ products }) => products.map(product => (
  <tr key={product.name}>
    <td>{product.name}</td>
    <td>{product.price}</td>
  </tr>
)

ProductRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string
}
