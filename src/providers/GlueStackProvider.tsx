// import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { config } from "@/config/gluestack-ui.config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { ReactNode } from "react";

interface IGlueStackProviderProps {
  children: ReactNode;
}

const GlueStackProvider = ({ children }: IGlueStackProviderProps) => {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
};

export default GlueStackProvider;
