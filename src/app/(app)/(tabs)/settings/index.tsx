import BaseScrollView from "@/components/containers/BaseScrollView";
import BaseView from "@/components/containers/BaseView";
import YStack from "@/components/containers/YStack";
import About from "@/features/settings/About";
import Account from "@/features/settings/Account";
import Extras from "@/features/settings/Extras";
import Reminder from "@/features/settings/Reminder";
import { useAppTheme } from "@/providers/UIProvider";

const Settings = () => {
  const theme = useAppTheme();
  return (
    <BaseView>
      <BaseScrollView>
        <YStack style={{ rowGap: 32, paddingTop: 24 }}>
          <Reminder />
          <Account />
          <About />
          <Extras />
        </YStack>
      </BaseScrollView>
    </BaseView>
  );
};

export default Settings;
