import YStack from "@/components/containers/YStack";
import SettingsHeaderItem from "@/features/settings/SettingsHeaderItem";
import SettingsItem from "@/features/settings/SettingsItem";
import { router } from "expo-router";
import SettingsCard from "./SettingsCard";

const Extras = () => {
  return (
    <YStack style={{ rowGap: 12 }}>
      <SettingsHeaderItem>Extras</SettingsHeaderItem>
      <SettingsCard>
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
      </SettingsCard>
    </YStack>
  );
};

export default Extras;
