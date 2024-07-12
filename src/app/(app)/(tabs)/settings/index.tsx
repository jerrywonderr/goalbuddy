import BaseView from "@/components/containers/BaseView";
import YStack from "@/components/containers/YStack";
import SettingsHeaderItem from "@/features/settings/SettingsHeaderItem";
import SettingsItem from "@/features/settings/SettingsItem";
import { useAppTheme } from "@/providers/UIProvider";
import { router } from "expo-router";

const Settings = () => {
  const theme = useAppTheme();
  return (
    <BaseView>
      <YStack style={{ rowGap: 12 }}>
        <SettingsHeaderItem>Extras</SettingsHeaderItem>
        <YStack
          style={{
            borderWidth: 1,
            borderRadius: 12,
            borderColor: theme.colors.grey1,
            rowGap: 3,
          }}
        >
          <SettingsItem
            label="Playground"
            onPress={() => router.push("/settings/play")}
            showDivider
          />
          <SettingsItem
            label="Explore"
            onPress={() => router.push("/settings/explore")}
            showDivider={false}
          />
        </YStack>
      </YStack>
    </BaseView>
  );
};

export default Settings;
