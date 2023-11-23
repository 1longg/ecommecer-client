"use client";
import { createContext, useState, useEffect } from "react";
import { clearLocalStorage, getAccessTokenFormLocalStorage } from "./auth";
import { set } from "lodash";

export const AppContext = createContext<{
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    reset: () => void;
}>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    reset: () => {}
});



export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    setIsAuthenticated(getAccessTokenFormLocalStorage() ? true : false);
  },[])
  const reset = () => {
    setIsAuthenticated(false)
  }
  return (
    <AppContext.Provider value={{reset,  isAuthenticated, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};
