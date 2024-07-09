import { ReactNode } from "react";
import { PaperProvider } from "react-native-paper";

interface IUIProviderProps {
  children: ReactNode;
}

const UIProvider = ({ children }: IUIProviderProps) => {
  return <PaperProvider>{children}</PaperProvider>;
};

export default UIProvider;
