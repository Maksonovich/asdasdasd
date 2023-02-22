import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);
  const [data, setData] = useState([]);
  const products = data;

  return (
    <AuthContext.Provider value={{ currentUser, data, products, setData }}>
      {children}
    </AuthContext.Provider>
  );
};