import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Ecommerce Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      sx={{
        zIndex: "1",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        top: "180px",
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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                sx={{
                  color: "#000",
                }}
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the terms and condition."
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              width: "40%",

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
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Register;
