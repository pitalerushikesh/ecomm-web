import { makeStyles } from "@mui/styles";
import React from "react";
import Navbar from "./navbar/Navbar";

const styles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const Base = ({ children, className }) => {
  // const classes = styles();
  return (
    <div className={className}>
      <Navbar />
      {/* <div className={classes.toolbar}></div> */}
      <div>{children}</div>
    </div>
  );
};

export default Base;
