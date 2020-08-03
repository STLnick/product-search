import React, { useEffect, useState } from 'react'

import { ProductTable } from './ProductTable'
import { FilterBar } from './FilterBar'

import './ProductSearchDisplay.css'

import api from 'api'

export const ProductSearchDisplay = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [filterText, setFilterText] = useState('')

  const filterProducts = (text, showStockedOnly) => {
    if (showStockedOnly) {
      return products.filter(product => product.name.toLowerCase().includes(text) && product.stocked)
    }
    return products.filter(product => product.name.toLowerCase().includes(text))
  }

  const handleFilterTextChange = (e) => {
    const newSearch = e.target.value.toLowerCase()
    setFilterText(newSearch)

    const newFilteredProducts = filterProducts(newSearch, isChecked)
    setFilteredProducts(newFilteredProducts)
  }

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked
    setIsChecked(checked)

    const newFilteredProducts = filterProducts(filterText, checked)
    setFilteredProducts(newFilteredProducts)
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
      <FilterBar checkboxHandler={handleCheckboxChange} textHandler={handleFilterTextChange} text={filterText} />
      <ProductTable loading={isLoading} products={filteredProducts} />
      <div className="spacer"></div>
    </div>
  )
}
