import { ReactNode, createContext, useMemo, useState } from "react";

type TAuthProvider = {
  children: ReactNode;
};

type TAuthContext = {
  authenticated: boolean;
  isLoading: boolean;
};

export const AuthContext = createContext<TAuthContext | null>(null);

export const AuthProvider = ({ children }: TAuthProvider) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const context = useMemo(
    () => ({ authenticated, isLoading }),
    [authenticated, isLoading]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
