import { FieldValues, useController, useFormContext } from "react-hook-form";
import { KeyboardTypeOptions } from "react-native";
import { TextInput } from "react-native-paper";
import { ErrorText } from "../BodyText";
import FormGroup from "./FormGroup";

type TTextFeild = {
  name: string;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
};

const TextField = ({ name, ...props }: TTextFeild) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController<FieldValues>({ name, control });
  const { value, onChange, onBlur } = field;

  return (
    <FormGroup>
      <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        mode="outlined"
        error={!!error}
        {...props}
      />
      {error ? <ErrorText>{error.message}</ErrorText> : null}
    </FormGroup>
  );
};

export default TextField;
