import React, { useEffect, useState } from "react";
import firebase, { authentication } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
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
