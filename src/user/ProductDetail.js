import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import tshirt1 from "../assets/tshirt1.png";
import tshirt2 from "../assets/tshirt2.png";
import tshirt3 from "../assets/tshirt.png";
import Header from "../components/Header";
import Base from "../first/Base";
import firebase from "../first/Firebase";
import ProductCard from "./components/ProductCard";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffebc2",
  },
});

const ProductImage = [tshirt1, tshirt2, tshirt3];
const ProductColors = ["#00d9ff", "#ff6b01", "#fdc20c", "#AB9160"];
const ProductSize = [37, 38, 39, 40, 41, 42];

const RightDetailCard = ({ onClick }) => {
  // const dispatch = useDispatch();
  const [value, setValue] = React.useState(2);
  const [colorValue, setColorValue] = React.useState(ProductColors[0]);
  const [sizeValue, setSizeValue] = React.useState(ProductSize[0]);
  // const addToCart = (product) => {
  //   console.log(product);
  //   dispatch({ type: "ADD_TO_CART", payload: product });
  // };
  return (
    <Grid container rowSpacing={4}>
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
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        sm={12}
        justifyContent="center"
        display="flex"
      >
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
          <Box
            sx={{
              display: "flex",

              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {ProductColors.map((color, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: `${color}`,
                  ml: 2,
                  cursor: "pointer",
                  filter: `drop-shadow(2px 2px 7px ${color})`,
                  border: colorValue === color ? "3px solid #fff" : "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
                onClick={() => setColorValue(color)}
              ></Card>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        sm={12}
        justifyContent="center"
        display="flex"
      >
        <Box
          className="size-selector"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            fontWeight="bold"
            fontSize="1.2rem"
            fontFamily="Roboto"
            variant="subtitle1"
          >
            Size:
          </Typography>
          <Grid container display="flex">
            {ProductSize.map((size, index) => (
              <Grid
                key={index}
                item
                lg={4}
                md={4}
                sm={4}
                xs={4}
                display="flex"
                justifyContent="space-around"
              >
                <Card
                  sx={{
                    borderRadius: "15px",
                    width: "60px",
                    mt: 1,
                    height: "40px",
                    boxShadow:
                      sizeValue === size
                        ? "none"
                        : "0px 0px 18px 0px #fff inset",
                    backgroundColor: sizeValue === size ? "#FDC20C" : "#ffe0b2",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                  onClick={() => setSizeValue(size)}
                >
                  <Typography
                    fontWeight="bold"
                    fontSize="1.2rem"
                    fontFamily="Ubuntu"
                    variant="subtitle1"
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    {size}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item lg={12} md={12} xs={12} sm={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#000000",
              borderRadius: "25px",
              color: "#FDC20C",
              textTransform: "none",
              height: "70px",
              width: "180px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "gray",
                borderColor: "#fff",
                color: "#fff",
              },
            }}
            onClick={onClick}
          >
            <Typography fontFamily="Ubuntu" variant="subtitle1">
              Add to cart
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

const DetailCard = ({ prod_label, prod_price, prod_img, onClick }) => {
  const [selectedImage, setSelectedImage] = useState(ProductImage[0]);

  return (
    <Card
      elevation={10}
      sx={{
        py: "40px",
        px: 2,
        width: "80%",
        border: "1px solid #fff",
        borderRadius: "30px",
        boxShadow: "0px 0px 50px 5px #fff inset",
        filter: "drop-shadow(0px 10px 15px gray)",
        backgroundColor: "#ffe0b2",
      }}
      className="detail-card"
    >
      <CardContent className="detail-card">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Grid
            lg={4}
            md={12}
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
              {prod_label}
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                py: 2,
                color: "gray",
                fontSize: "1.4rem",
              }}
              className="prod-desc"
            >
              Consequat irure irure in incididunt do voluptate fugiat culpa
              reprehenderit ex fugiat adipisicing pariatur nostrud.
            </Typography>

            <Box
              className="detail-card-image"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              }}
            >
              {ProductImage.map((image) => (
                <Card
                  elevation={0}
                  sx={{
                    p: "10px",
                    m: 3,
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    backgroundColor:
                      selectedImage === image ? "#fdc20b" : "#fff0da",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  <Box component="img" src={image} width="50px" />
                </Card>
              ))}
            </Box>
          </Grid>
          <Grid
            lg={4}
            md={12}
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
                flexDirection: "column",
                boxShadow: "0px 0px 50px 5px #fff inset",
                backgroundColor: "#ffe0b2",
                border: "1px solid #fff",
                p: 2,
              }}
            >
              <Box
                component="img"
                className="prod-img"
                src={prod_img}
                sx={{
                  filter: "drop-shadow(5px 0px 40px #fdae1f)",
                }}
                width="200px"
              />
              <Typography
                variant="h4"
                sx={{
                  pt: 1,
                  color: "#6a60a0",
                  //fontSize: "2.0rem",
                  fontWeight: "bold",
                }}
              >
                ???{prod_price}
              </Typography>
            </Card>
          </Grid>
          <Box
            className="detail-card-image"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
            }}
          >
            {ProductImage.map((image) => (
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
                  cursor: "pointer",
                }}
                onClick={() => setSelectedImage(image)}
              >
                <Box component="img" src={image} width="50px" />
              </Card>
            ))}
          </Box>
          <Grid
            lg={4}
            md={12}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <RightDetailCard onClick={onClick} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const ProductDetail = ({ prodLabel, prodImg, prodPrice }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const _fetchData = async () => {
    try {
      const _products = await getDocs(collection(firebase, "Products"));
      setProducts(_products.docs.map((doc) => doc.data()));
      setLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    _fetchData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    const _product = JSON.parse(localStorage.getItem("product"));
    setProduct(_product);
  }, []);

  const addToCart = (product) => {
    console.log(product);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <Base loading={loading} className={classes.root}>
      <Header />
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          position: "relative",
          top: "-300px",
        }}
      >
        <DetailCard
          prod_img={product.imgUrl}
          prod_label={product.prodName}
          prod_price={product.prodPrice}
          onClick={() => addToCart(product)}
        />
      </Box>
      <Container maxWidth="xl">
        <Grid
          sx={{
            position: "relative",
            top: "-200px",
          }}
          container
          justifyContent="center"
          alignItems="center"
          display="flex"
          spacing={8}
        >
          {products.map((doc) => {
            return (
              <Grid
                item
                xl={3}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                justifyContent="center"
                alignItems="center"
                display="flex"
              >
                <ProductCard
                  onCardClick={() => {
                    localStorage.setItem("product", JSON.stringify(doc));
                    navigate("/productDetail");
                  }}
                  onClick={() => {
                    addToCart(doc);
                    console.log("Document", doc);
                  }}
                  prodLabel={doc["prodName"]}
                  prodPrice={doc.prodPrice}
                  prodImg={doc.imgUrl}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Base>
  );
};

export default ProductDetail;
