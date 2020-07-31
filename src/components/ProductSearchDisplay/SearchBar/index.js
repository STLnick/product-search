import React from 'react'
import PropTypes from 'prop-types'

import './SearchBar.css'

export const SearchBar = ({ handler, text }) => {

  return (
    <div className="search-container">
      <label className="screen-reader-text" htmlFor="search">Search</label>
      <input id="search" type="text" onChange={handler} placeholder="Search..." value={text} />
    </div>
  )
}

SearchBar.propTypes = {
  handler: PropTypes.func,
  text: PropTypes.string
}
