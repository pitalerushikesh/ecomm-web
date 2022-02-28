import React from "react";
import { Breadcrumbs as MUIBreadCrumbs, Link, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const BreadCrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const path = pathname.split("/").filter((x) => x);
  return (
    <MUIBreadCrumbs
      separator={<AiOutlineRight color="#fff" fontWeight="bold" />}
      aria-label="breadcrumb"
    >
      {path.length > 0 ? (
        <Link
          underline="hover"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "Ubuntu",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
          color="inherit"
        >
          Home
        </Link>
      ) : (
        <Typography
          variant="subtitle1"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "Ubuntu",
          }}
        >
          Home
        </Typography>
      )}
      {path.map((name, index) => {
        const pushTo = path.slice(0, index + 1).join("/");
        const isLast = index === path.length - 1;
        return isLast ? (
          <Typography
            key={name}
            variant="subtitle1"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Ubuntu",
            }}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
        ) : (
          <Link
            underline="hover"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Ubuntu",

              cursor: "pointer",
            }}
            onClick={() => navigate(`/${pushTo}`)}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Link>
        );
      })}
    </MUIBreadCrumbs>
  );
};

export default BreadCrumbs;
