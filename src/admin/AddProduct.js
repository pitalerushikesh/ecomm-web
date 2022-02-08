import { Button, Container, Grid, styled, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { LoadingButton } from "@mui/lab";

const Input = styled("input")({
  display: "none",
});

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  function handleClick() {
    setLoading(true);
  }
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
          <TextField label="Name" />
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
          <TextField label="Price" />
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
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" type="file" />
            <LoadingButton
              startIcon={<FiUpload />}
              variant="contained"
              loading={loading}
              onClick={handleClick}
              component="span"
            >
              Upload
            </LoadingButton>
          </label>
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
          <Button>Add</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProduct;
