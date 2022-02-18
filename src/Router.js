import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./admin/AddProduct";
import Register from "./first/Register";
import SimpleWave from "./first/SimpleWave";
import CartView from "./user/CartView";
import Homepage from "./user/Homepage";
import ProductDetail from "./user/ProductDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wave" element={<SimpleWave />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<CartView />} />
        {/* <Route path="/productDetail/:productID" element={<ProductDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
