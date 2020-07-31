import React from 'react'
import PropTypes from 'prop-types'

export const ProductCategoryRow = ({ category }) => {

  return (
    <tr colSpan="2">
      <th>{category}</th>
    </tr>
  )
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string
}
