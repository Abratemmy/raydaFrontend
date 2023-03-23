import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Auction from './components/Auction';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route exact path="/" caseSensitive={false} element={<Products />} />
        <Route exact path="/product_details/:title" caseSensitive={false} element={<SingleProduct />} />
        <Route exact path="/auction" caseSensitive={false} element={<Auction />} />
      </Routes>
    </div>
  );
}

export default App;
