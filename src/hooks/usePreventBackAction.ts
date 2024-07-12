import { useNavigation } from "expo-router";
import { useEffect } from "react";

const usePreventBackAction = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const handler = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();

      // navigation.dispatch(e.data.action);
    });

    return navigation.removeListener("beforeRemove", handler);
  }, []);
};

export default usePreventBackAction;
