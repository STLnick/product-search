import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

export const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {renderTableBody()}
      </tbody>
    </table>
  )
}

ProductTable.propTypes = {
  products: PropTypes.array
}
