import { Grid, Container, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Base from "../first/Base";
import ProductCard from "./ProductCard";
import { collection, getDocs } from "firebase/firestore";
import firebase from "../first/Firebase";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffebc2",
  },
});

const Homepage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const _fetchData = async () => {
    const _products = await getDocs(collection(firebase, "Products"));
    setProducts(_products.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    _fetchData();
  }, []);

  return (
    <Base className={classes.root}>
      <Header />
      <Container maxWidth="xl">
        <Grid
          sx={{
            position: "relative",
            top: "-300px",
          }}
          container
          justifyContent="center"
          alignItems="center"
          display="flex"
          spacing={8}
        >
          {products.map((doc) => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  underline="none"
                  onClick={() => {
                    localStorage.setItem("product", JSON.stringify(doc));
                    navigate("/productDetail");
                  }}
                >
                  <ProductCard
                    prodLabel={doc["prodName"]}
                    prodPrice={doc.prodPrice}
                    prodImg={doc.imgUrl}
                  />
                </Link>
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
      </Container>
    </Base>
  );
};

export default Homepage;
