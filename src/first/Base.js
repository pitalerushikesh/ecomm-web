import React from "react";
import Navbar from "./navbar/Navbar";

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
