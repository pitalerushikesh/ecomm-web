import { Autocomplete, TextField, Box } from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

const SelectWrapper = ({ name, data, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <Autocomplete
      options={data}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            alt={option.code.toLowerCase()}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          />
          {option.label}({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          {...configSelect}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        ></TextField>
      )}
    />
  );
};

export default SelectWrapper;
