import React, { useEffect, useState } from 'react'

import { ProductTable } from './ProductTable'
import { FilterBar } from './FilterBar'

import './ProductSearchDisplay.css'

import api from 'api'

export const ProductSearchDisplay = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [products, setProducts] = useState([])
  const [filterText, setFilterText] = useState('')

  const filterProducts = (highestPrice, text, showStockedOnly) => {
    const newFilteredProducts = products
      .filter(product => product.name.toLowerCase().includes(text))
      .filter(product => showStockedOnly ? product.stocked : true)
      .filter(product => Number(product.price.slice(1)) < highestPrice)

    setFilteredProducts(newFilteredProducts)
  }

  const handleFilterTextChange = (e) => {
    const newSearch = e.target.value.toLowerCase()
    setFilterText(newSearch)

    filterProducts(maxPrice, newSearch, isChecked)
  }

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked
    setIsChecked(checked)

    filterProducts(maxPrice, filterText, checked)
  }

  const handlePriceChange = (e) => {
    const newMaxPrice = e.target.value
    setMaxPrice(newMaxPrice)

    filterProducts(newMaxPrice, filterText, isChecked)
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true)

      const products = await api.index()
      setFilteredProducts(products)
      setProducts(products)

      setIsLoading(false)
    })()
  }, [])

  return (
    <div className="wrapper flex flex--column flex--align-center flex--justify-between">
      <FilterBar
        checkboxHandler={handleCheckboxChange}
        priceHandler={handlePriceChange}
        price={maxPrice}
        textHandler={handleFilterTextChange}
        text={filterText}
      />
      <ProductTable
        loading={isLoading}
        products={filteredProducts}
      />
      <div className="spacer"></div>
    </div>
  )
}
