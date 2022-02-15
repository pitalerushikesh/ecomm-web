import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import React from "react";
import Base from "../first/Base";
import tshirt1 from "../assets/tshirt3.png";

const CartView = () => {
  return (
    <Base>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Container
          sx={{
            mb: 3,
          }}
          maxWidth="xl"
        >
          <Typography variant="h3">Shopping Cart</Typography>
        </Container>
        <Grid conatiner>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Card>
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
                      src={tshirt1}
                      sx={{
                        px: 3,
                      }}
                      width="13%"
                      component="img"
                    />
                    <Typography variant="h5" fontFamily="Open Sans">
                      Tshirt - Legends of the Hidden Temple
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
                      $100
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
                    >
                      <AiFillDelete />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Base>
  );
};

export default CartView;
