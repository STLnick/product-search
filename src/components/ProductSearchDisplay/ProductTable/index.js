import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

import './ProductTable.css'

export const ProductTable = ({ products }) => {
  const categorizedProducts = products.reduce((acc, product) => {
    acc[product.category] =
      acc[product.category] ?
        acc[product.category].concat(product) : [product]

    return acc
  }, {})

  const categories = Object.keys(categorizedProducts)

  const renderProductRows = (products) => {
    return products.map(({ name, price, stocked }) => <ProductRow className={stocked ? '' : 'out-of-stock'} key={name} name={name} price={price} />)
  }

  const renderTableBody = () => {
    return categories.map((category, i) => {
      return (
        <Fragment key={i}>
          <ProductCategoryRow key={category} category={category} />
          {renderProductRows(categorizedProducts[category])}
        </Fragment>
      )
    })
  }

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
