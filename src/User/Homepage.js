import { Box, Grid, Typography, Container, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Base from "../first/Base";
import ProductCard from "./ProductCard";
import { collection, getDocs } from "firebase/firestore";
import firebase from "../first/Firebase";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffebc2",
  },
});

const Homepage = () => {
  const classes = useStyles();

  const queryProducts = async () =>
    await getDocs(collection(firebase, "Products"));

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const _fetchData = async () => {
      const _products = await getDocs(collection(firebase, "Products"));

      setProducts(_products.docs.map((doc) => doc.data()));
    };
    _fetchData();
    queryProducts();
    return () => {};
  }, []);

  return (
    <Base className={classes.root}>
      <Box
        sx={{
          mx: "80px",
        }}
      >
        <Grid
          container
          sx={{
            p: "25px",
            px: "100px",
            background: "linear-gradient(to right ,#fdac1e, #fec01d)",
            height: "400px",
            borderRadius: "30px",
          }}
        >
          <Grid
            item
            justifyContent="start"
            display="flex"
            lg={4}
            md={4}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "Ubuntu",
              }}
            >
              Home / Product
            </Typography>
          </Grid>
          <Grid
            item
            justifyContent="center"
            display="flex"
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontFamily: "Ubuntu",
              }}
            >
              Shop
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sx={{
              justifyContent: "flex-end",
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <IconButton
              sx={{
                color: "#000",
                alignItems: "start",
              }}
              size="small"
            >
              <FaShoppingCart />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
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
                <ProductCard
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
      </Container>
    </Base>
  );
};

export default Homepage;
