import { Button } from "@mui/material";
import { useFormikContext } from "formik";

import React from "react";

const SubmitWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };
  const configSubmit = {
    ...otherProps,
    variant: "contained",
    size: "large",
    onClick: handleSubmit,
  };
  return (
    <Button
      {...configSubmit}
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
      {children}
    </Button>
  );
};

export default SubmitWrapper;
