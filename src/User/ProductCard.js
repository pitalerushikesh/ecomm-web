import React from "react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";

const ProductCard = ({ prodImg, prodLabel, prodPrice, key, id }) => {
  return (
    <Card
      key={key}
      id={id}
      sx={{
        maxWidth: "383px",
        minWidth: "383px",
        border: "1px solid #fff",
        borderRadius: "30px",
        boxShadow: "0px 0px 50px 5px #fff inset",
        backgroundColor: "#ffe0b2",
        "&:hover": {
          boxShadow: "5px 5px 50px 5px #fff",
        },
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
              src={prodImg}
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
            {prodLabel}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#6a60a0",
              fontWeight: "bold",
            }}
          >
            ₹{prodPrice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
