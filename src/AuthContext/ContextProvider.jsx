import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
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

  // Function to log in a user with email and password
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to update user profile information
  const updateUserProfile = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  };

  const userInfo = {
    user,
    setUser,
    createUser,
    userLogin,
    updateUserProfile,
    loading,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default ContextProvider;
