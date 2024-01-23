// UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const login = (id) => {
    return new Promise((resolve) => {
      setUserId(id);
      resolve(); // Risolvi la promessa quando il valore è stato impostato
    });
  };
  const logout = () => {
    setUserId(null);
  };

  return (
    <UserContext.Provider value={{ userId, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
