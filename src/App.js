// import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
  const user = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={user ? <Order /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
