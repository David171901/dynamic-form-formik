import { FormikErrors } from "formik";

export interface InputProps {
  type:
    | "text"
    | "textarea"
    | "email"
    | "password"
    | "radio-group"
    | "select"
    | "checkbox"
    | "checkbox-group"
    | "field-array";
  name: string;
  value: string | number | boolean | string[] | { [key: string]: string }[];
  validations: Validation[];
  placeholder?: string;
  typeValue?: "string" | "boolean" | "array";
  label?: string;
  options?: Opt[];
  fields?: Fields[];
}

export interface Opt {
  value: string | number;
  desc: string;
}

export interface Fields {
  type: "text";
  name: string;
  label: string;
  placeholder?: string;
}

export interface Validation {
  type:
    | "required"
    | "isEmail"
    | "minLength"
    | "isTrue"
    | "maxLength"
    | "matches";
  value?: string | number | boolean | RegExp;
  message: string;
}

export interface FormContextProps {
    constructorForm: { [x: string]: InputProps[] }
    className?: string
    title?: string
    values: { [x: string]: InputProps[] }
    setvalues: React.Dispatch<React.SetStateAction<{[key: string]: any}>>
    onSubmit?: ((args: { [x: string]: string }) => void) | undefined
    initializer?: { [key: string]: any } 
}

export interface FormHandlers {
    values: { [key: string]: any }
}
