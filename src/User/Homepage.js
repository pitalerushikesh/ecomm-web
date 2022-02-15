import { Grid, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Base from "../first/Base";
import ProductCard from "./components/ProductCard";
import { collection, getDocs } from "firebase/firestore";
import firebase from "../first/Firebase";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffebc2",
  },
});

const Homepage = () => {
  const classes = useStyles();
  const { cartItems } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const _fetchData = async () => {
    const _products = await getDocs(collection(firebase, "Products"));
    setProducts(_products.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    _fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Base className={classes.root}>
      <Header />
      <Box justifyContent="center" alignItems="center" display="flex">
        <Grid
          sx={{
            position: "relative",
            top: "-300px",
          }}
          container
          justifyContent="center"
          alignItems="center"
          display="flex"
          rowSpacing={8}
        >
          {products.map((doc) => {
            return (
              <Grid
                item
                xl={3}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                justifyContent="center"
                alignItems="center"
                display="flex"
              >
                <ProductCard
                  onCardClick={() => {
                    localStorage.setItem("product", JSON.stringify(doc));
                    navigate("/productDetail");
                  }}
                  onClick={() => addToCart(doc)}
                  prodLabel={doc["prodName"]}
                  prodPrice={doc.prodPrice}
                  prodImg={doc.imgUrl}
                />
              </Grid>
            );
          })}
          {/* <Grid
            item
            lg={4}
            md={6}
            xs={12}
            sm={12}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <ProductCard />
          </Grid> */}
        </Grid>
      </Box>
    </Base>
  );
};

export default Homepage;
