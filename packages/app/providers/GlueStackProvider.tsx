// import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@my/ui/config/gluestack-ui.config";
import { ReactNode } from "react";

interface IGlueStackProviderProps {
  children: ReactNode;
}

const GlueStackProvider = ({ children }: IGlueStackProviderProps) => {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
};

export default GlueStackProvider;
