import React from 'react'

import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

import api from 'api'

export class ProductSearchDisplay extends React.Component {
  state = {
    filteredProducts: [],
    products: [],
    searchText: ''
  }
  render() {
    return (
      <div>
        <SearchBar handler={this.handleSearchTextChange} text={this.state.searchText} />
        <ProductTable products={this.state.filteredProducts} />
      </div>
    )
  }
}
