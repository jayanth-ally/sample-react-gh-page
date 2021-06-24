import React, { Component, useEffect, useState } from 'react';

import MoviesComponent from './components/movies';
import ProductsComponent from './components/products';
import Counter from './components/counter';

import * as http from './utils/http';
import './App.css';

const App = () => {

  return (<div className="App">
    <ProductsComponent />
  </div>);
}

export default App;
