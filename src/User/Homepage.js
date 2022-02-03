import { makeStyles } from "@mui/styles";
import React from "react";

import Base from "../first/Base";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffebc2",
  },
});

const Homepage = () => {
  const classes = useStyles();
  return (
    <Base className={classes.root}>
      <h1>Hello World 1</h1>
      <h1>Hello World 2</h1>
      <h1>Hello World 3</h1>
      <h1>Hello World 4</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
    </Base>
  );
};

export default Homepage;
