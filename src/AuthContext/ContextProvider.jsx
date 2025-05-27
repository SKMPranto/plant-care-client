import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../FireBase/fireBase.config";

const ContextProvider = ({ children }) => {
  // State to manage loading status
  const [user, setUser] = useState(null);

  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Function to create a new user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const userInfo = {
    user,
    setUser,
    createUser,
    updateUserProfile,
    loading,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default ContextProvider;
