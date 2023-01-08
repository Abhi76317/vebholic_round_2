import React, { useState } from 'react';
import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditProduct from './pages/EditProduct';

function App() {
  const [product, setProduct] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product product={product} setProduct={setProduct} />} />
          <Route path="/edit/product/:id" element={<EditProduct product={product} setProduct={setProduct} />} />
          <Route path="/product" element={<Home product={product} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
