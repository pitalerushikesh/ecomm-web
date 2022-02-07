import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  IconButton,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Children, useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import tshirt1 from "../assets/tshirt1.png";
import tshirt2 from "../assets/tshirt2.png";
import tshirt3 from "../assets/tshirt3.png";
import Base from "../first/Base";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffebc2",
  },
});

const ProductImage = [tshirt1, tshirt2, tshirt3];
const RightDetailCard = () => {
  const [value, setValue] = React.useState(2);
  const [colorValue, setColorValue] = React.useState(0);

  const handleColorValueChange = (colorValue, newColorValue) => {
    setColorValue(newColorValue);
  };

  const control = {
    value: colorValue,
    onChange: handleColorValueChange,
    exclusive: true,
  };

  const colorChildren = [
    <ToggleButton>
      <Box
        color="red"
        sx={{
          border: "1px solid #fff",
          borderRadius: "50%",
        }}
      ></Box>
    </ToggleButton>,
  ];

  return (
    <Grid container>
      <Grid item lg={12} md={12} xs={12} sm={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography
            fontWeight="bold"
            fontSize="1.2rem"
            fontFamily="Roboto"
            variant="subtitle1"
          >
            Review:
          </Typography>
          <Rating
            name="simple-controlled"
            precision={0.5}
            value={value}
            size="large"
            sx={{
              mx: 2,
            }}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography
            fontSize="1.2rem"
            fontFamily="Roboto"
            fontWeight="bold"
            variant="subtitle1"
          >
            {value}
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={12} md={12} xs={12} sm={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography
            fontSize="1.2rem"
            fontFamily="Roboto"
            fontWeight="bold"
            variant="subtitle1"
          >
            Color:
          </Typography>
          <ToggleButtonGroup>{colorChildren}</ToggleButtonGroup>
        </Box>
      </Grid>
    </Grid>
  );
};

const DetailCard = () => {
  const [selectedImage, setSelectedImage] = useState(ProductImage[0]);

  return (
    <Card
      elevation={10}
      sx={{
        py: "40px",
        px: "10px",
        width: "80%",
        border: "1px solid #fff",
        borderRadius: "30px",
        boxShadow: "0px 0px 50px 5px #fff inset",
        backgroundColor: "#ffe0b2",
      }}
    >
      <CardContent>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Grid
            lg={4}
            md={4}
            justifyContent="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <Typography
              variant="h3"
              sx={{
                color: "#6a60a0",
                //fontSize: "2.0rem",
                fontWeight: "bold",
              }}
            >
              Legends Tshirt Wolf Sharingan
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                py: 2,
                color: "gray",
              }}
            >
              Consequat irure irure in incididunt do voluptate fugiat culpa
              reprehenderit ex fugiat adipisicing pariatur nostrud.
            </Typography>

            <Container
              sx={{
                justifyContent: "start",
                display: "flex",
              }}
            >
              <Grid
                container
                alignItems="center"
                display="flex"
                spacing={-10}
                fullWidth
              >
                {ProductImage.map((image) => (
                  <Grid
                    item
                    lg={4}
                    md={4}
                    xs={4}
                    sm={4}
                    justifyContent="center"
                    display="flex"
                  >
                    <Card
                      elevation={0}
                      sx={{
                        p: "10px",
                        height: "60px",
                        width: "60px",
                        borderRadius: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        backgroundColor:
                          selectedImage === image ? "#fdc20b" : "#fff0da",
                      }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <Box component="img" src={image} width="50px" />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
          <Grid
            lg={4}
            md={4}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Card
              elevation={4}
              sx={{
                width: "400px",
                height: "400px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: "50%",
              }}
            >
              <Box
                component="img"
                className="prod-img"
                src={selectedImage}
                sx={{
                  filter: "drop-shadow(5px 0px 40px #fdae1f)",
                }}
                width="200px"
              />
            </Card>
          </Grid>
          <Grid
            lg={4}
            md={4}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <RightDetailCard />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const ProductDetail = () => {
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
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          position: "relative",
          top: "-300px",
        }}
      >
        <DetailCard />
      </Box>
    </Base>
  );
};

export default ProductDetail;
