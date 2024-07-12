import { P2Bold } from "@/components/BodyText";
import { H5 } from "@/components/HeadingText";
import { LinkButton, PrimaryButton } from "@/components/MButton";
import Center from "@/components/containers/Center";
import YStack from "@/components/containers/YStack";
import TextField from "@/components/form/TextField";
import useStepper from "@/hooks/useStepper";
import { yupResolver } from "@hookform/resolvers/yup";
import { router } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

type TRequestPassword = {
  onSuccess: VoidFunction;
};

const RequestPasswordLink = ({ onSuccess }: TRequestPassword) => {
  const methods = useForm({ mode: "all", resolver: yupResolver(schema) });

  const onSubmit = () => {
    onSuccess();
  };

  return (
    <View style={{ flex: 1 }}>
      <YStack style={{ rowGap: 8 }}>
        <H5 style={{ marginTop: 12 }}>Forgot your password?</H5>
        <P2Bold>
          To reset your password, please enter the email address of your
          GoalBuddy account.
        </P2Bold>
      </YStack>
      <FormProvider {...methods}>
        <YStack style={{ marginVertical: 16 }}>
          <TextField
            label="Your email"
            name="email"
            keyboardType="email-address"
          />

          <Center style={{ marginVertical: 24 }}>
            <PrimaryButton
              disabled={!methods.formState.isValid}
              onPress={methods.handleSubmit(onSubmit)}
            >
              Reset my password
            </PrimaryButton>
          </Center>
        </YStack>
      </FormProvider>
    </View>
  );
};

const RequestSent = () => {
  return (
    <View style={{ flex: 1 }}>
      <YStack style={{ rowGap: 8 }}>
        <H5 style={{ marginTop: 12 }}>Forgot your password?</H5>
        <P2Bold>A password reset link has been sent to your email.</P2Bold>
        <Center style={{ marginVertical: 36 }}>
          <LinkButton onPress={router.back}>Go back to login</LinkButton>
        </Center>
      </YStack>
    </View>
  );
};

const RequestReset = () => {
  const [step, { nextStep }] = useStepper();

  const render = () => {
    switch (step) {
      case 2:
        return <RequestSent />;
      default:
        return <RequestPasswordLink onSuccess={nextStep} />;
    }
  };

  return <View style={{ flex: 1 }}>{render()}</View>;
};

export default RequestReset;
