import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./admin/AddProduct";
import GoogleAuth from "./first/SignIn/GoogleAuth";
import SimpleWave from "./first/SimpleWave";
import CartView from "./user/CartView";
import Homepage from "./user/Homepage";
import ProductDetail from "./user/ProductDetail";
import AuthProvider from "./first/SignIn/Authentication";
import PrivateRoute from "./first/SignIn/PrivateRoute";

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wave" element={<SimpleWave />} />
          <Route path="/googleauth" element={<GoogleAuth />} />
          <PrivateRoute path="/addProduct" element={<AddProduct />} />
          <PrivateRoute path="/productDetail" element={<ProductDetail />} />
          <PrivateRoute path="/cart" element={<CartView />} />
          {/* <Route path="/productDetail/:productID" element={<ProductDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
