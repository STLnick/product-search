import React from 'react'
import PropTypes from 'prop-types'

import './SearchBar.css'

export const SearchBar = ({ checkboxHandler, textHandler, text }) => {

  return (
    <div className="search-container">
      <label className="screen-reader-text" htmlFor="search">Search</label>
      <input id="search" type="text" onChange={textHandler} placeholder="Search..." value={text} />
      <div className="stocked-container flex flex--align-center flex--justify-center">
        <label htmlFor="stocked">In Stock Items Only</label>
        <input id="stocked" type="checkbox" onChange={checkboxHandler} />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  checkboxHandler: PropTypes.func,
  textHandler: PropTypes.func,
  text: PropTypes.string
}
