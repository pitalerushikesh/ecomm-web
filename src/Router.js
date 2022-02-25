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
          <Route exact path="/" element={<Homepage />} />

          <Route exact path="/wave" element={<SimpleWave />} />
          <Route exact path="/login" element={<GoogleAuth />} />
          <Route exact path="/addProduct" element={<PrivateRoute />}>
            <Route exact path="/addProduct" element={<AddProduct />} />
          </Route>
          <Route exact path="/addProduct" element={<PrivateRoute />}>
            <Route exact path="/addProduct" element={<AddProduct />} />
          </Route>
          <Route exact path="/productDetail" element={<PrivateRoute />}>
            <Route exact path="/productDetail" element={<ProductDetail />} />
          </Route>
          <Route exact path="/cart" element={<PrivateRoute />}>
            <Route exact path="/cart" element={<CartView />} />
          </Route>

          {/* <Route path="/productDetail/:productID" element={<ProductDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
