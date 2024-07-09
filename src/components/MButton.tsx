import { Button, ButtonText } from "@gluestack-ui/themed";

interface IMButton {
  title: string;
}

export const PrimaryButton = ({ title }: IMButton) => {
  return (
    <Button action="primary">
      <ButtonText color="$buttonTextPrimaryLight">{title}</ButtonText>
    </Button>
  );
};

export const LinkButton = ({ title }: IMButton) => {
  return (
    <Button variant="link" size="xs">
      <ButtonText
        textDecorationLine="underline"
        fontWeight="$normal"
        color="$bodyTextLight"
        // fontSize="$2xs"
      >
        {title}
      </ButtonText>
    </Button>
  );
};

export const SecondaryButton = ({ title }: IMButton) => {
  return (
    <Button action="tertiary">
      <ButtonText color="$buttonTextSecondaryLight">{title}</ButtonText>
    </Button>
  );
};
