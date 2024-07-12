import useBoolean from "@/hooks/useBoolean";
import { FieldValues, useController, useFormContext } from "react-hook-form";
import { TextInput } from "react-native-paper";
import { ErrorText } from "../BodyText";
import FormGroup from "./FormGroup";

type TPasswordField = {
  name: string;
  label?: string;
};

const PasswordField = ({ name, ...props }: TPasswordField) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController<FieldValues>({ name, control });
  const { value, onChange, onBlur } = field;
  const [secure, { toggle }] = useBoolean(true);

  return (
    <FormGroup>
      <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secure}
        right={
          secure ? (
            <TextInput.Icon icon="eye" onPress={toggle} />
          ) : (
            <TextInput.Icon onPress={toggle} icon="eye-off" />
          )
        }
        mode="outlined"
        error={!!error}
        {...props}
      />
      {error ? <ErrorText>{error.message}</ErrorText> : null}
    </FormGroup>
  );
};

export default PasswordField;
