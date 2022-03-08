import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { LoadingButton } from "@mui/lab";
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

  // function renameFile(originalFile, newName) {
  //   return new File([originalFile], newName, {
  //     type: originalFile.type,
  //     lastModified: originalFile.lastModified,
  //   });
  // }

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

  var url = "https://api.cloudinary.com/v1_1/outstanders/image/upload";

  // const onUpload = async (e) => {
  //   e.preventDefault();
  //   console.log("Im in");
  //   console.log(image);
  //   const formData = new FormData();
  //   formData.append("file", image);
  //   formData.append("upload_preset", "tshirts-outstanders");

  //   await axios
  //     .post(url, formData)
  //     .then((res) => {
  //       console.log(res);
  //       // console.log(res.data.secure_url);
  //       // const imgUrl = res.data.secure_url;
  //     })
  //     .catch((err) => {
  //       console.log("Error", err);
  //     });
  // };

  // const tpImage = async (e) => {
  //   e.preventDefault();
  //   console.log(image);
  // };

  const postImageData = async (e) => {
    e.preventDefault();
    setLoading(true);
    var file = image;
    console.log("File : ", file);
    const formData = new FormData();
    console.log(file);

    formData.append("file", file);
    formData.append("upload_preset", "tshirts-outstanders");

    // formData.append("name", Date.now());

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
      await axios(options).then((res) => {
        let _filename = res;
        console.log(_filename);
        console.log(res.data.secure_url);
        const imageUrl = res.data.secure_url;
        if (imageUrl.length !== 0) {
          console.log("Url Added", imageUrl);
          onSubmit({ e, imgUrl: imageUrl });
          setLoading(false);
          handleImage(null);
        } else {
          console.log("Url Not Added");
          setLoading(false);
          handleImage(null);
        }
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      handleImage(null);
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
