import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
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
            alignItems: "start",
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
  );
};

export default Header;
