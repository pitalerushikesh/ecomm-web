import { Box } from "@mui/system";
import React, { useState } from "react";

const ImagePreview = ({ file }) => {
  const [prevImage, setPrevImage] = useState();

  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    setPrevImage(reader.result);
  };

  return (
    <div>
      <Box component="img" src={prevImage} width="200px" alt="Image Preview" />
    </div>
  );
};

export default ImagePreview;
