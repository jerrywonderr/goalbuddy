import YStack from "@/components/containers/YStack";
import { useAppTheme } from "@/providers/UIProvider";
import { ReactNode } from "react";

type TSettingsCard = { children: ReactNode };

const SettingsCard = ({ children }: TSettingsCard) => {
  const theme = useAppTheme();
  return (
    <YStack
      style={{
        borderWidth: 1,
        borderRadius: 12,
        borderColor: theme.colors.grey1,
        rowGap: 3,
      }}
    >
      {children}
    </YStack>
  );
};

export default SettingsCard;
