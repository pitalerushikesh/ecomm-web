import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./admin/AddProduct";
import Homepage from "./user/Homepage";
import ProductDetail from "./user/ProductDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
