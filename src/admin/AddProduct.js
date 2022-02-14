import { Button, Grid, styled, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { DateTimePicker, LoadingButton } from "@mui/lab";
import firebase from "../first/Firebase";
import { addDoc, collection } from "firebase/firestore";
import ImagePreview from "../components/ImagePreview";
import axios from "axios";

// const Input = styled("input")({
//   display: "none",
// });

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

  const { prodName, prodPrice } = state;

  const handleChange = (e) => (event) => {
    setState({
      ...state,
      error: false,
      [e]: event.target.value,
    });
  };

  const onSubmit = async ({ e, imgUrl }) => {
    e.preventDefault();
    console.log("Im in");
    console.log(imgUrl);
    try {
      await addDoc(collection(firebase, "Products"), {
        prodName: prodName,
        prodPrice: prodPrice,
        imgUrl: imgUrl,
      }).then(() => {
        setState({ prodName: "", prodPrice: "" });
        setLoading(false);
      });
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
    setLoading(true);
    let formData = new FormData();

    formData.append("image", image, image.name + "-" + Date.now() + ".png");

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
    try {
      let res = await axios(options).then((res) => {
        let _filename = res.data.data.image.filename;
        console.log(_filename);
        let imageUrl = res.data.data.url;
        console.log(res.data);
        console.log(res.data.data.url);
        if (imageUrl.length != 0) {
          console.log("Url Added", imageUrl);

          onSubmit({ e, imgUrl: imageUrl });
          setLoading(false);
        } else {
          console.log("Url Not Added");
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
            type="number"
            value={prodPrice}
            sx={{
              WebkitAppearance: "none",
              MozAppearance: "none",
              appearance: "none",
              margin: "0",
            }}
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
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={postImageData}
          >
            Add
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProduct;
