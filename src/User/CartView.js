import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Base from "../first/Base";
import { useDispatch, useSelector } from "react-redux";

const CartProduct = ({ prod_img, prod_label, prod_price, onClick }) => {
  return (
    <Card
      sx={{
        mb: 1,
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

const CartView = () => {
  const { cartItems } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
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

        <Grid conatiner>
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
                  <Divider variant="middle" />
                </>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Base>
  );
};

export default CartView;
