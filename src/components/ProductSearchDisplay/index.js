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

  handleSearchTextChange = (e) => {
    const newSearch = e.target.value.toLowerCase()
    const newFilteredProducts = this.state.products.filter(product => product.name.toLowerCase().includes(newSearch))
    this.setState({ filteredProducts: newFilteredProducts, searchText: newSearch })
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
