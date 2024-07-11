import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuth should be used within the AuthProvider.");
  }

  return context;
};

export default useAuth;
