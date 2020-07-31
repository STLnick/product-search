import React from 'react'

import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

import './ProductSearchDisplay.css'

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

  async componentDidMount() {
    const products = await api.index()
    this.setState({ filteredProducts: products, products })
  }

  render() {
    return (
      <div className="wrapper flex flex--column flex--align-center flex--justify-between">
        <SearchBar handler={this.handleSearchTextChange} text={this.state.searchText} />
        <ProductTable products={this.state.filteredProducts} />
        <div className="spacer"></div>
      </div>
    )
  }
}
