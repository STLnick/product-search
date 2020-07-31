import React from 'react'
import PropTypes from 'prop-types'

export const ProductCategoryRow = ({ category }) => {

  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  )
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string
}
