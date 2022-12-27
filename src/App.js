import React from'react';
import ReactDOM from'react-dom';
import './App.css';
import AppNavbar from './Component/AppNavbar';
import Cart from './Component/Cart';
import Products from './Component/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar/>
        <Routes>
          <Route exact path="products" element={<Products />} />
          <Route exact path="cart" element={<Cart />} />
        </Routes>
      </div>  

    </Router>
      
    
  );
}

export default App;
