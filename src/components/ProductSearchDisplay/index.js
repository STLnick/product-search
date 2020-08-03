import React, { useEffect, useState } from 'react'

import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

import './ProductSearchDisplay.css'

import api from 'api'

export const ProductSearchDisplay = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchTextChange = (e) => {
    const newSearch = e.target.value.toLowerCase()
    const newFilteredProducts = products.filter(product => product.name.toLowerCase().includes(newSearch))

    setFilteredProducts(newFilteredProducts)
    setSearchText(newSearch)
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      const products = await api.index()
      setFilteredProducts(products)
      setProducts(products)

      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className="wrapper flex flex--column flex--align-center flex--justify-between">
      <SearchBar handler={handleSearchTextChange} text={searchText} />
      <ProductTable loading={isLoading} products={filteredProducts} />
      <div className="spacer"></div>
    </div>
  )
}
