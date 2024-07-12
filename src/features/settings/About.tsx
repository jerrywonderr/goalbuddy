import YStack from "@/components/containers/YStack";
import SettingsHeaderItem from "@/features/settings/SettingsHeaderItem";
import SettingsItem from "@/features/settings/SettingsItem";
import { router } from "expo-router";
import SettingsCard from "./SettingsCard";

const About = () => {
  return (
    <YStack style={{ rowGap: 12 }}>
      <SettingsHeaderItem>About</SettingsHeaderItem>
      <SettingsCard>
        <SettingsItem
          label="Privacy policy"
          onPress={() => router.push("/settings/play")}
        />
        <SettingsItem
          label="Terms of use"
          onPress={() => router.push("/settings/explore")}
          showDivider={false}
        />
      </SettingsCard>
    </YStack>
  );
};

export default About;
