import React from 'react';

import { ProductSearch } from './components'

import './App.css';

export const App = () => {
  return (
    <div className="container flex flex--column flex--align-center flex--justify-center">
      <ProductSearch />
    </div>
  );
}
