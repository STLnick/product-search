import React from 'react'
import PropTypes from 'prop-types'

export const ProductRow = ({ name, price, inStock }) => inStock ?
  (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  ) : (
    <tr style={{ color: 'red' }}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )


ProductRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  inStock: PropTypes.bool
}
