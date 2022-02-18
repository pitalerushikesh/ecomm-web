import React from "react";
import Button from "@mui/material/Button";
import TextField from "../components/FormUI/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import SimpleWave from "./SimpleWave";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Ecommerce Website
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPass: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  country: "",
  state: "",
  city: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Phone is required"),

  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),

  confirmPass: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  addressLine1: Yup.string().required("Address is required"),
  addressLine2: Yup.string(),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
});

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <SimpleWave />
      <Container
        sx={{
          zIndex: "1",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          top: "-600px",
          position: "relative",
        }}
        component="main"
        maxWidth="md"
      >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#000",
            }}
            fontFamily="Ubuntu"
            fontWeight="bold"
            variant="h3"
            mb={7}
          >
            Create Your Account
          </Typography>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} textAlign="start" display="flex">
                  <Typography>Your Details</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="firstName" label="First Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="lastName" label="Last Name" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField name="email" label="Your Email" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField name="phone" label="Phone Number" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="password" label="Password" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="confirmPass" label="Confirm Password" />
                </Grid>
                <Grid item xs={12} textAlign="start" display="flex">
                  <Typography>Your Address</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField name="addressLine1" label="Address Line 1" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField name="addressLine2" label="Address Line 2" />
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid
                  item
                  xs={12}
                  textAlign="center"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FormControlLabel
                    sx={{
                      color: "#000",
                    }}
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I agree to the terms and condition."
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                >
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      width: "40%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      backgroundColor: "#000",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                      },
                    }}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid item>
                  <Link
                    href="#"
                    sx={{
                      color: "#000",
                      fontWeight: "bold",
                    }}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
};

export default Register;
