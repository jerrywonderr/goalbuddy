import { router } from "expo-router";
import { ReactNode, createContext, useEffect, useState } from "react";

type TAuthProvider = {
  children: ReactNode;
};

type TAuthContext = {
  authenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => void;
};

export const AuthContext = createContext<TAuthContext | null>(null);

export const AuthProvider = ({ children }: TAuthProvider) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(login, 1500);
  }, []);

  const login = (email: string, password: string) => {
    setAuthenticated(true);
    setIsLoading(false);
    router.push("/home");
  };

  const context = { authenticated, isLoading, login };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
