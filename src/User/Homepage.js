import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Base from "../first/Base";
import tshirt1 from "../assets/tshirt1.png";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffebc2",
  },
});

const ProductCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "383px",
        minWidth: "383px",

        border: "1px solid #fff",
        borderRadius: "30px",
        boxShadow: "0px 0px 50px 5px #fff inset",
        backgroundColor: "#ffe0b2",
      }}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={6} alignItems="center" display="flex">
            <Card
              sx={{
                p: "4px",
                border: "1px solid #bcbcbc",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <AiOutlineFullscreen />
            </Card>
          </Grid>
          <Grid
            item
            xs={6}
            justifyContent="end"
            alignItems="center"
            display="flex"
          >
            <BsHandbagFill />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            lg={12}
            sm={12}
            md={12}
            xs={12}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Box
              component="img"
              className="prod-img"
              src={tshirt1}
              sx={{
                filter: "drop-shadow(5px 0px 40px #fdae1f)",
              }}
              width="200px"
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: "6px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#6a60a0",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            Legends Tshirt Wolf Sharingan
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#6a60a0",
              fontWeight: "bold",
            }}
          >
            ₹420.00
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const Homepage = () => {
  const classes = useStyles();
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
          <Grid
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
          </Grid>
          <Grid
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
          </Grid>
          <Grid
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
          </Grid>
          <Grid
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
          </Grid>
          <Grid
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
          </Grid>
          <Grid
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
          </Grid>
        </Grid>
      </Container>
    </Base>
  );
};

export default Homepage;
