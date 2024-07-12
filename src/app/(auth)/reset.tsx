import BaseScrollView from "@/components/containers/BaseScrollView";
import BaseView from "@/components/containers/BaseView";
import RequestReset from "@/features/reset/RequestReset";
import { useState } from "react";

type TState = "request" | "reset";

const ResetScreen = () => {
  const [state, setState] = useState<TState>("request");
  const render = () => {
    switch (state) {
      default:
        return <RequestReset />;
    }
  };

  return (
    <BaseView>
      <BaseScrollView>{render()}</BaseScrollView>
    </BaseView>
  );
};

export default ResetScreen;
