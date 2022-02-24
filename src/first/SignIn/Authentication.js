import React, { createContext, useState, useEffect } from "react";
import Loader from "../../components/Loader";
import firebase, { authentication } from "../Firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    authentication.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
