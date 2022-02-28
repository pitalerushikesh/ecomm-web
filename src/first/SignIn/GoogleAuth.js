import React, { useEffect, useState } from "react";
import firebase, { authentication } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Box } from "@mui/system";
import { Avatar, Button, Typography, Container } from "@mui/material";
import {
  doc,
  setDoc,
  collection,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import google from "../../assets/google.png";
import pcbg from "../../assets/login/pcbg.svg";

import mbbg from "../../assets/login/mbbg.svg";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import SimpleWave from "../SimpleWave";

const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // const fetchUsers = async () => {
  //   try {
  //     const _users = await getDocs(collection(firebase, "Users"));
  //     setUsers(_users.docs.map((doc) => ({ id: doc.uid, ...doc.data() })));
  //     setLoading(true);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithPopup(authentication, provider)
      .then(async (result) => {
        const new_user = result.user;
        const docRef = doc(firebase, "Users", new_user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          localStorage.setItem("user", JSON.stringify(new_user));
          navigate("/");
        } else {
          await setDoc(doc(firebase, "Users", new_user.email), {
            name: new_user.displayName,
            email: new_user.email,
            photoURL: new_user.photoURL,
            createdAt: serverTimestamp(),
          })
            .then(() => {
              console.log("New user", new_user);
              localStorage.setItem("user", JSON.stringify(new_user));
              navigate("/");
            })
            .catch((err) => {
              console.log(err);
            });
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

        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: "100vw",
          pt: 18,
          background: "linear-gradient(60deg, #fdac1e 0%, #fec01d 100%)",
        }}
      >
        <Box
          component="img"
          src={pcbg}
          width="30%"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
        />

        <Box
          component="img"
          src={mbbg}
          sx={{
            display: { sm: "block", md: "none" },
          }}
          className="login-img"
        />
      </Box>
      <SimpleWave />
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
