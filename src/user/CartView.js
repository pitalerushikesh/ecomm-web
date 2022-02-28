import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Divider,
  BottomNavigation,
  Paper,
  Button,
} from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Base from "../first/Base";
import { useDispatch, useSelector } from "react-redux";
import Register from "../first/SignIn/Register";

const CartProduct = ({ prod_img, prod_label, prod_price, onClick }) => {
  return (
    <Card
      sx={{
        mb: 1,
        display: {
          sm: "none",
          xs: "none",
          md: "block",
          lg: "block",
        },
      }}
    >
      <CardContent>
        <Grid
          conatiner
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Grid
            item
            lg={10}
            md={10}
            sm={8}
            xs={8}
            justifyContent="start"
            alignItems="center"
            display="flex"
          >
            <Box
              src={prod_img}
              sx={{
                px: 3,
              }}
              width="10%"
              component="img"
            />
            <Typography variant="h5" fontFamily="Open Sans">
              {prod_label}
            </Typography>
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            sm={2}
            xs={2}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Typography variant="h5" fontWeight="bold">
              ₹{prod_price}
            </Typography>
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            sm={2}
            xs={2}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <IconButton
              sx={{
                color: "red",
              }}
              onClick={onClick}
            >
              <AiFillDelete />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const CartMobView = ({ prod_img, prod_label, prod_price, onClick }) => {
  return (
    <Card
      sx={{
        mb: 1,
        display: {
          sm: "block",
          xs: "block",
          md: "none",
          lg: "none",
        },
      }}
    >
      <CardContent>
        <Grid container>
          <Grid
            item
            lg={4}
            sm={4}
            xs={4}
            md={4}
            justifyContent="start"
            alignItems="center"
            display="flex"
          >
            <Box
              src={prod_img}
              sx={{
                px: 3,
              }}
              width="50%"
              component="img"
            />
          </Grid>
          <Grid item lg={7} sm={7} xs={7} md={7}>
            <Typography variant="h5" fontFamily="Open Sans">
              {prod_label}
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              ₹{prod_price}
            </Typography>
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            sm={1}
            xs={1}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <IconButton
              sx={{
                color: "red",
              }}
              onClick={onClick}
            >
              <AiFillDelete />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const CartView = () => {
  const { cartItems } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let tempTotal = 0;
    cartItems.forEach((cartItem) => {
      tempTotal = Number(tempTotal) + Number(cartItem.prodPrice);
    });
    setTotalAmount(tempTotal);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const deleteProduct = (product) => {
    console.log(product);
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };
  return (
    <Base>
      <Box
        sx={{
          p: 3,
          mb: 5,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            mb: 3,
          }}
        >
          <Typography variant="h3">Shopping Cart</Typography>
        </Container>

        <Grid container display="flex">
          <Grid item lg={8} md={8} sm={12} xs={12}>
            {cartItems.map((productItem) => {
              return (
                <>
                  <CartProduct
                    key={productItem.id}
                    prod_img={productItem.imgUrl}
                    prod_label={productItem.prodName}
                    prod_price={productItem.prodPrice}
                    onClick={() => deleteProduct(productItem)}
                  />
                  <CartMobView
                    key={productItem.id}
                    prod_img={productItem.imgUrl}
                    prod_label={productItem.prodName}
                    prod_price={productItem.prodPrice}
                    onClick={() => deleteProduct(productItem)}
                  />
                  <Divider variant="middle" />
                </>
              );
            })}
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Register />
          </Grid>
        </Grid>
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            // backgroundColor: "#fdac1e",
            p: 1,
            background: "linear-gradient(to right ,#fdac1e, #fec01d)",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Total Amount : ₹ {totalAmount.toFixed(2)}
          </Typography>
          <Button
            size="large"
            sx={{
              color: "#000",

              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "30px",
              p: 2,

              fontFamily: "Ubuntu",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#FFEBC2",
                color: "#000",
              },
            }}
            variant="contained"
          >
            Continue
          </Button>
        </BottomNavigation>
      </Paper>
    </Base>
  );
};

export default CartView;
