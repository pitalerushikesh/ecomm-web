import React from "react";
import Loader from "../components/Loader";
import Navbar from "./navbar/Navbar";

const Base = ({ children, className, loading }) => {
  // const classes = styles();
  return (
    <>
      {loading == false ? (
        <Loader />
      ) : (
        <div className={className}>
          <Navbar />
          {/* <div className={classes.toolbar}></div> */}
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

export default Base;
