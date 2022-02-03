import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
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
        borderRadius: "30px",
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
              width="200px"
            />
          </Grid>
        </Grid>
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
          m: "4rem",
        }}
      >
        <Grid
          container
          spacing={24}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Grid item lg={4}>
            <ProductCard />
          </Grid>
          <Grid item lg={4}>
            <ProductCard />
          </Grid>
          <Grid item lg={4}>
            <ProductCard />
          </Grid>
        </Grid>
      </Box>
    </Base>
  );
};

export default Homepage;
