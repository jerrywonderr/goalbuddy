import SecureStoreAdapter from "@/lib/secure-store-adapter";
import "react-native-url-polyfill/auto";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUseLocalStore {
  firstOpen: boolean;
  sendReminder: boolean;
  onFirstOpen: VoidFunction;
  toggleSendReminder: VoidFunction;
}

export const useLocalStore = create<IUseLocalStore>()(
  persist(
    (set, get) => ({
      firstOpen: true,
      onFirstOpen: () => set({ firstOpen: false }),
      sendReminder: false,
      toggleSendReminder: () => {
        const sendReminder = get().sendReminder;
        set({ sendReminder: !sendReminder });
      },
    }),
    {
      name: "local-store",
      storage: createJSONStorage(() => SecureStoreAdapter),
    }
  )
);
