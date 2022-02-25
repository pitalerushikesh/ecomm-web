import React, { useEffect, useState } from "react";
import firebase, { authentication } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Box } from "@mui/system";
import { Avatar, Button, Typography, Container } from "@mui/material";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import google from "../../assets/google.png";
import pcbg from "../../assets/login/pcbg.svg";
import wave from "../../assets/login/wave.svg";
import mbbg from "../../assets/login/mbbg.svg";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      const _users = await getDocs(collection(firebase, "Users"));
      setUsers(_users.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithPopup(authentication, provider)
      .then(async (result) => {
        const new_user = result.user;
        try {
          console.log("Im Outside", new_user.email);
          users.map((user) => {
            console.log("Im Inside1", user.email);
            console.log("Im Inside2", new_user.email);
            if (user.email === new_user.email) {
              console.log("User already exists");
              navigate("/");
              return;
            } else {
              console.log("Im Inside3", new_user.email);
              addDoc(collection(firebase, "Users"), {
                uid: new_user.uid,
                email: new_user.email,
                displayName: new_user.displayName,
                photoURL: new_user.photoURL,
                createdAt: serverTimestamp(),
              });
              localStorage.setItem("user", JSON.stringify(user));
              console.log(user);
              navigate("/");
              return;
            }
          });
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return loading ? (
    <Container
      maxWidth="lg"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        pt: 20,
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={pcbg}
        width="50%"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
      <img src={wave} />
      <Box
        component="img"
        src={mbbg}
        sx={{
          display: { sm: "block", md: "none" },
        }}
        className="login-img"
      />
      <Button
        startIcon={<Avatar src={google} />}
        sx={{
          backgroundColor: "#fff",
          textTransform: "none",
          borderRadius: "10px",
          mt: 10,
          py: 2,
          px: 4,
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
        variant="conatined"
        size="large"
        onClick={signInWithGoogle}
      >
        <Typography variant="h6">Sign In With Google</Typography>
      </Button>
    </Container>
  ) : (
    <Loader />
  );
};

export default GoogleAuth;
// await addDoc(collection(firebase, "Users"), {
//   uid: newuser.uid,
//   email: user.email,
//   displayName: user.displayName,
//   photoURL: user.photoURL,
//   createdAt: serverTimestamp(),
// });

// const timestamp = Date.now();
// const timeStamp = new Intl.DateTimeFormat("en-US", {
//   year: "numeric",
//   month: "2-digit",
//   day: "2-digit",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
// }).format(timestamp);
