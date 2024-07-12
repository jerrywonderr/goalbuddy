import YStack from "@/components/containers/YStack";
import SettingsHeaderItem from "@/features/settings/SettingsHeaderItem";
import SettingsItem from "@/features/settings/SettingsItem";
import { router } from "expo-router";
import SettingsCard from "./SettingsCard";

const Account = () => {
  return (
    <YStack style={{ rowGap: 12 }}>
      <SettingsHeaderItem>Account</SettingsHeaderItem>
      <SettingsCard>
        <SettingsItem
          label="Manage account"
          onPress={() => router.push("/settings/play")}
        />
        <SettingsItem
          label="Edit Profile"
          onPress={() => router.push("/settings/explore")}
        />
        <SettingsItem
          label="Privacy"
          onPress={() => router.push("/settings/explore")}
          showDivider={false}
        />
      </SettingsCard>
    </YStack>
  );
};

export default Account;
