import React from 'react'
import PropTypes from 'prop-types'

export const ProductRow = ({ className, name, price }) => (
  <tr className={className}>
    <td>{name}</td>
    <td>{price}</td>
  </tr>
)

ProductRow.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
}
