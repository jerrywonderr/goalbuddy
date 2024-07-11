import BaseView from "@/components/BaseView";
import { H2 } from "@/components/HeadingText";
import { useLocalStore } from "@/store/useLocalStore";
import { BlurView } from "expo-blur";
import { Redirect } from "expo-router";
import { useEffect } from "react";

const EntryScreen = () => {
  const { firstOpen, onFirstOpen } = useLocalStore();

  useEffect(() => {
    return onFirstOpen;
  }, []);

  if (firstOpen) {
    return Redirect({ href: "/walkthrough" });
  }

  return (
    <BaseView>
      <BlurView
        intensity={80}
        style={{
          flex: 1,
        }}
      >
        <H2>Goal Buddy</H2>
      </BlurView>
    </BaseView>
  );
};

export default EntryScreen;
