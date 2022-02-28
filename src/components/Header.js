import React from "react";
import { Box, Grid, Typography, IconButton, Badge } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";

const Header = () => {
  const { cartItems } = useSelector((state) => state.CartReducer);
  const navigate = useNavigate();
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
          <BreadCrumbs />
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
            onClick={() => navigate("/cart")}
          >
            <Badge
              badgeContent={cartItems.length}
              sx={{
                "& .MuiBadge-badge": {
                  color: "#000",
                  backgroundColor: "#fff",
                },
                fontWeight: "bold",
              }}
            >
              <FaShoppingCart
                style={{
                  paddingX: "5px",
                }}
              />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
