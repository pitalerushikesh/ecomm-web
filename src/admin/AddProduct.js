import { Button, Grid, styled, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { LoadingButton } from "@mui/lab";
import firebase from "../first/Firebase";
import { addDoc, collection } from "firebase/firestore";
import ImagePreview from "../components/ImagePreview";
import axios from "axios";

const Input = styled("input")({
  display: "none",
});

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);
  function handleClick() {
    fileRef.current.click();
    setLoading(true);
  }
  const [state, setState] = useState({
    prodName: "",
    prodPrice: "",
  });

  const { prodName, prodPrice, imgUrl } = state;

  const handleChange = (e) => (event) => {
    setState({
      ...state,
      error: false,
      [e]: event.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Im in");
    try {
      await addDoc(collection(firebase, "Products"), {
        prodName: prodName,
        prodPrice: prodPrice,
        imgUrl: imgUrl,
      }).then(() => setState({ prodName: "", prodPrice: "" }));
      console.log("Im in 2");
    } catch (error) {
      console.log("Error adding document : ", error);
    }
  };
  const [image, setImage] = useState(null);
  const handleImage = (imgFile) => {
    console.log(imgFile);
    setImage(imgFile);
    setLoading(false);
  };

  var url =
    "https://api.imgbb.com/1/upload?key=3647b0520ccf7b47e53971529e0ef9ff";

  const postImageData = async (e) => {
    let formData = new FormData();
    formData.append("image", image);
    let options = {
      method: "POST",
      url: url,
      Headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Headers": "*",
      },
      data: formData,
    };
    let res = await axios(options);
    console.log(res.data.data.url);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Grid container rowSpacing={4}>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <TextField
            label="Name"
            value={prodName}
            onChange={handleChange("prodName")}
          />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <TextField
            label="Price"
            value={prodPrice}
            onChange={handleChange("prodPrice")}
          />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <input
            ref={fileRef}
            type="file"
            onChange={(event) => {
              handleImage(event.target.files[0]);
            }}
            hidden
          />
          {image && <ImagePreview file={image} />}
          <LoadingButton
            onClick={() => {
              handleClick();
            }}
            startIcon={<FiUpload />}
            variant="contained"
            loading={loading}
            component="span"
          >
            Upload
          </LoadingButton>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Button onClick={postImageData}>Add</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProduct;
