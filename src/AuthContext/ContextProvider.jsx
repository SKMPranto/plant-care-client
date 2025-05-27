import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../FireBase/fireBase.config";
import Swal from "sweetalert2";

const ContextProvider = ({ children }) => {
  // State to manage loading status
  const [user, SetUser] = useState(null);
  const provider = new GoogleAuthProvider();

  // State to manage loading status
  const [loading, SetLoading] = useState(true);

  // Function to create a new user with email and password
  const createUser = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to log in a user with email and password
  const userLogin = (email, password) => {
    SetLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to log in a user with Google
  const googleLogin = () => {
    return signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {});
  };

  const handleLogOut = () => {
    return signOut(auth).then(()=>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Logged Out",
            showConfirmButton: false,
            timer: 1500,
        });
    })
  }

  // Function to update user profile information
  const updateUserProfile = (updatedData) => {
    SetLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  };

  // Effect to monitor authentication state changes
  // This effect runs when the component mounts and sets up an observer for authentication state changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      SetLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    SetUser,
    createUser,
    userLogin,
    googleLogin,
    handleLogOut,
    updateUserProfile,
    loading,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default ContextProvider;
