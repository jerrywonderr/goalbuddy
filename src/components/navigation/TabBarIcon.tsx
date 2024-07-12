// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { useAppTheme } from "@/providers/UIProvider";
import { useMemo } from "react";
import Center from "../containers/Center";
import Flower from "../svgs/Flower";
import Goal from "../svgs/Goal";
import Home from "../svgs/Home";
import Settings from "../svgs/Settings";

// import { Feather } from "@expo/vector-icons";
// import { type IconProps } from "@expo/vector-icons/build/createIconSet";
// import { type ComponentProps } from "react";

// export function TabBarIcon({
//   ...rest
// }: IconProps<ComponentProps<typeof Feather>["name"]>) {
//   return <Feather size={28} style={[{ marginBottom: -3 }]} {...rest} />;
// }

type TIcon = "goal" | "home" | "for_you" | "settings";
type TTabBarIcon = {
  icon: TIcon;
  focused: boolean;
};
const TabBarIcon = ({ icon, focused }: TTabBarIcon) => {
  const theme = useAppTheme();
  const Icon = useMemo(() => {
    switch (icon) {
      case "for_you":
        return (
          <Flower color={focused ? theme.colors.text2 : theme.colors.text1} />
        );
      case "goal":
        return (
          <Goal color={focused ? theme.colors.text2 : theme.colors.text1} />
        );
      case "home":
        return (
          <Home color={focused ? theme.colors.text2 : theme.colors.text1} />
        );
      case "settings":
        return (
          <Settings color={focused ? theme.colors.text2 : theme.colors.text1} />
        );
      default:
        return null;
    }
  }, [icon]);

  return (
    <Center
      style={{
        backgroundColor: focused ? theme.colors.primary1 : undefined,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 14,
      }}
    >
      {Icon}
    </Center>
  );
};

export default TabBarIcon;
