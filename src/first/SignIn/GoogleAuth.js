import React from "react";
import firebase, { authentication } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    // const timestamp = Date.now();
    // const timeStamp = new Intl.DateTimeFormat("en-US", {
    //   year: "numeric",
    //   month: "2-digit",
    //   day: "2-digit",
    //   hour: "2-digit",
    //   minute: "2-digit",
    //   second: "2-digit",
    // }).format(timestamp);
    await signInWithPopup(authentication, provider)
      .then(async (result) => {
        const user = result.user;
        await addDoc(collection(firebase, "Users"), {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: serverTimestamp(),
        });
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      height="100vh"
    >
      <Button
        color="primary"
        variant="conatined"
        size="large"
        onClick={signInWithGoogle}
      >
        Google Sign in
      </Button>
    </Box>
  );
};

export default GoogleAuth;
