import { P2Bold } from "@/components/BodyText";
import { H5 } from "@/components/HeadingText";
import { LinkButton, PrimaryButton } from "@/components/MButton";
import BaseScrollView from "@/components/containers/BaseScrollView";
import BaseView from "@/components/containers/BaseView";
import Center from "@/components/containers/Center";
import YStack from "@/components/containers/YStack";
import PasswordField from "@/components/form/PasswordField";
import TextField from "@/components/form/TextField";
import usePreventBackAction from "@/hooks/usePreventBackAction";
import { yupResolver } from "@hookform/resolvers/yup";
import { router } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().trim().required("Password is required"),
});

const SignIn = () => {
  const methods = useForm({ mode: "all", resolver: yupResolver(schema) });
  usePreventBackAction();

  const onSignIn = () => {};

  return (
    <BaseView>
      <BaseScrollView>
        <H5 style={{ marginTop: 12 }}>Log in</H5>
        <P2Bold>Add your email and password</P2Bold>
        <FormProvider {...methods}>
          <YStack style={{ marginVertical: 16 }}>
            <TextField
              label="Your email"
              name="email"
              keyboardType="email-address"
            />
            <PasswordField label="Your password" name="password" />
          </YStack>

          <Center style={{ marginVertical: 24 }}>
            <PrimaryButton
              disabled={!methods.formState.isValid}
              onPress={methods.handleSubmit(onSignIn)}
            >
              Log in
            </PrimaryButton>
          </Center>
        </FormProvider>

        <LinkButton
          onPress={() => router.push("reset")}
          style={{ marginHorizontal: "auto", marginVertical: 36 }}
        >
          Forgot password?
        </LinkButton>
      </BaseScrollView>
    </BaseView>
  );
};

export default SignIn;
