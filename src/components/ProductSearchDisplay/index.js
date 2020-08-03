import React, { useEffect, useState } from 'react'

import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

import './ProductSearchDisplay.css'

import api from 'api'

export const ProductSearchDisplay = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')

  const handleSearchTextChange = (e) => {
    const newSearch = e.target.value.toLowerCase()
    let newFilteredProducts

    if (isChecked) {
      newFilteredProducts = products.filter(product => product.name.toLowerCase().includes(newSearch) && product.stocked)
    } else {
      newFilteredProducts = products.filter(product => product.name.toLowerCase().includes(newSearch))
    }

    setFilteredProducts(newFilteredProducts)
    setSearchText(newSearch)
  }

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked
    let newFilteredProducts

    if (checked) {
      newFilteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText) && product.stocked)
    } else {
      newFilteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText))
    }

    setFilteredProducts(newFilteredProducts)
    setIsChecked(checked)
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
      <SearchBar checkboxHandler={handleCheckboxChange} textHandler={handleSearchTextChange} text={searchText} />
      <ProductTable loading={isLoading} products={filteredProducts} />
      <div className="spacer"></div>
    </div>
  )
}
