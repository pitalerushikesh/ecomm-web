import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./admin/AddProduct";
import Register from "./first/SignIn/Register";
import GoogleAuth from "./first/SignIn/GoogleAuth";
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
        <Route path="/googleauth" element={<GoogleAuth />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<CartView />} />
        {/* <Route path="/productDetail/:productID" element={<ProductDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
