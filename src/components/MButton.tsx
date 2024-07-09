import { PropsWithChildren } from "react";
import { Button } from "react-native-paper";

type IMButton = PropsWithChildren<{}>;

export const PrimaryButton = ({ children }: IMButton) => {
  return <Button mode="contained">{children}</Button>;
};

export const LinkButton = ({ children }: IMButton) => {
  return <Button mode="text">{children}</Button>;
};

export const SecondaryButton = ({ children }: IMButton) => {
  return <Button mode="contained">{children}</Button>;
};
