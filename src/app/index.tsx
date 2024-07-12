import AppLoading from "@/components/AppLoading";
import { useLocalStore } from "@/store/useLocalStore";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";

const EntryScreen = () => {
  const { firstOpen, onFirstOpen } = useLocalStore();

  useFocusEffect(
    useCallback(() => {
      if (firstOpen) {
        router.push("/walkthrough");
      }

      return onFirstOpen;
    }, [])
  );

  return <AppLoading />;
};

export default EntryScreen;
