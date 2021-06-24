import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/navbar';
import MoviesComponent from './components/movies';
import ProductsComponent from './components/products';
import Counter from './components/counter';

import * as http from './utils/http';
import * as path from './utils/routes';
import './App.css';
import Home from './components/home';
import Cart from './components/cart';
import Product from './components/products/productpage';

const App = () => {

  return (<div className="App">
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path={path.CART_URL} component={Cart}/>
        <Route path={path.PRODUCT_URL} component={Product}/>
        <Route path={path.PRODUCTS_URL} component={ProductsComponent}/>
        <Route path={path.MOVIES_URL} component={MoviesComponent}/>
        <Route path={path.HOME_URL} exact component={Home}/>
        <Redirect to={path.HOME_URL} />
      </Switch>
    </BrowserRouter>
  </div>);
}

export default App;
