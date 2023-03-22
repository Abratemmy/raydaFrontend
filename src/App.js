import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route exact path="/" caseSensitive={false} element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
