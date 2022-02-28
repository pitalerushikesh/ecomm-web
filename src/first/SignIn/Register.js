import React, { useState, useEffect } from "react";
import TextFormField from "../../components/FormUI/TextFormField";
import SelectCountry from "../../components/FormUI/SelectCountry";
import { countries } from "../../components/data/Countries";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormControlWrapper from "../../components/FormUI/FormControl";
// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="#">
//         Ecommerce Website
//       </Link>
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

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
  termsOfService: false,
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
  termsOfService: Yup.boolean()
    .oneOf([true], "You must agree to the terms and Conditions.")
    .required("You must agree to the terms and Conditions."),
});

const Register = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  const [user, setUser] = useState([]);
  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user"));
    console.log(_user);
    if (_user !== null) {
      setUser(_user);
    }
  }, []);

  return (
    <Container component="main">
      <Box>
        {/* <Typography
          sx={{
            color: "#000",
          }}
          fontFamily="Ubuntu"
          fontWeight="bold"
          variant="h3"
          mb={7}
        >
          Create Your Account
        </Typography> */}
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
              <Grid item xs={12} sm={12}>
                <TextFormField
                  name="firstName"
                  value={user.displayName}
                  label="First Name"
                  disabled
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextFormField name="lastName" label="Last Name" disabled />
              </Grid> */}
              <Grid item xs={12} sm={12}>
                <TextFormField
                  name="email"
                  value={user.email}
                  label="Your Email"
                  disabled
                />
              </Grid>
              {/* <Grid item xs={12} sm={12}>
                  <TextFormField name="phone" label="Phone Number" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFormField name="password" label="Password" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFormField name="confirmPass" label="Confirm Password" />
                </Grid> */}
              <Grid item xs={12} textAlign="start" display="flex">
                <Typography>Your Address</Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFormField name="addressLine1" label="Address Line 1" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFormField name="addressLine2" label="Address Line 2" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <SelectCountry
                  name="country"
                  label="Select Your Country"
                  data={countries}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectCountry
                  name="state"
                  label="Select Your State"
                  data={countries}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectCountry
                  name="city"
                  label="Select Your City"
                  data={countries}
                />
              </Grid>
              <Grid
                item
                xs={12}
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FormControlWrapper
                  name="termsOfService"
                  legend="Terms of Service"
                  label="I agree to the terms and conditions"
                />
              </Grid>
              {/* <Grid
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
                display="flex"
              >
                <Submit>Register</Submit>
              </Grid> */}
            </Grid>

            {/* <Grid container justifyContent="center">
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
            </Grid> */}
          </Form>
        </Formik>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  );
};

export default Register;
