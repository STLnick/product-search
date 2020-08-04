import React from 'react'
import PropTypes from 'prop-types'

import './ProductRow.css'

export const ProductRow = ({ name, price, inStock }) => (
  <tr>
    <td className={inStock ? '' : 'out-of-stock'}>{name}</td>
    <td>{price}</td>
  </tr>
)

ProductRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  inStock: PropTypes.bool
}
