import { P2Bold } from "@/components/BodyText";
import { H5 } from "@/components/HeadingText";
import { PrimaryButton } from "@/components/MButton";
import BaseScrollView from "@/components/containers/BaseScrollView";
import BaseView from "@/components/containers/BaseView";
import Center from "@/components/containers/Center";
import YStack from "@/components/containers/YStack";
import PasswordField from "@/components/form/PasswordField";
import TextField from "@/components/form/TextField";
import useAuth from "@/hooks/useAuth";
import usePreventBackAction from "@/hooks/usePreventBackAction";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, "Password must be longer than 6 characters")
    .max(32, "Password can't be more than 32 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase character and one number"
    )
    .required("Password is required"),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password field is required"),
});

const SignUp = () => {
  const methods = useForm({ mode: "all", resolver: yupResolver(schema) });
  const { login } = useAuth();
  usePreventBackAction();

  const onSignUp = () => {
    const { email, password } = methods.getValues();
    return login(email, password);
  };

  return (
    <BaseView>
      <BaseScrollView>
        <H5 style={{ marginTop: 12 }}>Sign up</H5>
        <P2Bold>Add your email and password</P2Bold>
        <FormProvider {...methods}>
          <YStack style={{ marginVertical: 16 }}>
            <TextField
              label="Your email"
              name="email"
              keyboardType="email-address"
            />
            <PasswordField label="Your password" name="password" />
            <PasswordField label="Confirm password" name="cPassword" />
          </YStack>

          <Center style={{ marginVertical: 24 }}>
            <PrimaryButton
              disabled={!methods.formState.isValid}
              onPress={methods.handleSubmit(onSignUp)}
            >
              Sign up
            </PrimaryButton>
          </Center>
        </FormProvider>
      </BaseScrollView>
    </BaseView>
  );
};

export default SignUp;
