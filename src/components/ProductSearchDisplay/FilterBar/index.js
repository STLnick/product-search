import React from 'react'
import PropTypes from 'prop-types'

import './FilterBar.css'

export const FilterBar = ({ checkboxHandler, priceHandler, price, textHandler, text }) => {

  return (
    <div className="search-container">
      <label className="screen-reader-text" htmlFor="search">Search</label>
      <input id="search" type="text" onChange={textHandler} placeholder="Search..." value={text} />
      <div className="stocked-container flex flex--align-center flex--justify-center">
        <label htmlFor="stocked">In Stock Items Only</label>
        <input id="stocked" type="checkbox" onChange={checkboxHandler} />
      </div>
      <label className="screen-reader-text" htmlFor="price">Price</label>
      <input id="price" type="number" onChange={priceHandler} value={price} />
    </div>
  )
}

FilterBar.propTypes = {
  checkboxHandler: PropTypes.func,
  priceHandler: PropTypes.func,
  price: PropTypes.number,
  textHandler: PropTypes.func,
  text: PropTypes.string
}
