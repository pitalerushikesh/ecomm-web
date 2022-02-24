import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Button, Grid } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const useStyles = makeStyles({
  appBar: {
    alignItems: "center",
  },
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = useState([]);
  const classes = useStyles();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user"));
    setUser(_user);
    console.log(_user);
  }, []);

  const navigate = useNavigate();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        color: "black",
      }}
      className={classes.appBar}
      position="sticky"
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Grid item lg={4} md={4} sm={4} xs={4}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <GiHamburgerMenu />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem key="Home" onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        color: "black",
                      }}
                      textAlign="center"
                    >
                      Home
                    </Typography>
                  </MenuItem>
                  <MenuItem key="Shop" onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        color: "black",
                      }}
                      textAlign="center"
                    >
                      Shop
                    </Typography>
                  </MenuItem>
                  <MenuItem key="Blog" onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        color: "black",
                      }}
                      textAlign="center"
                    >
                      Cart
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              xs={4}
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  key="Home"
                  onClick={() => navigate("/")}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                  }}
                >
                  Home
                </Button>
                <Button
                  key="Shop"
                  onClick={() => navigate("/productDetail")}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Shop
                </Button>
                <Button
                  key="Blog"
                  onClick={() => navigate("/cart")}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Cart
                </Button>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                LOGO
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              xs={4}
              sm={4}
              justifyContent="right"
              alignItems="center"
              display="flex"
            >
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
