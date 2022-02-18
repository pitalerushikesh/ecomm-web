import { Autocomplete } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { countries } from "../../../components/data/Countries";
import React from "react";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
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
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://www.countryflags.io/${option.code.toLowerCase()}.png`}
            srcset={`https://www.countryflags.io/${option.code.toLowerCase()}.png 2x`}
          />
          {option.label}({option.code})
        </Box>
      )}
    />
  );
};

export default SelectWrapper;
