import * as Yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";
import { forms } from "./forms";
import { TypeOfShape } from "yup/lib/object";
import { InputProps } from "../interfaces/interfaces";

type YupBoolean = Yup.BooleanSchema<
  boolean | undefined,
  AnyObject,
  boolean | undefined
>;
type YupString = Yup.StringSchema<
  string | undefined,
  AnyObject,
  string | undefined
>;
type YupArray = Yup.ArraySchema<
  Yup.ObjectSchema<{
    myString: Yup.StringSchema<string>;
    myNumber: Yup.NumberSchema<number>;
  }>,
  AnyObject,
  Maybe<TypeOfShape<{ myString: Yup.StringSchema<string, AnyObject, string>; myNumber: Yup.NumberSchema<number, AnyObject, number>; }>[]>
>;

const generateValidations = (field: InputProps) => {
  let schema: YupBoolean | YupString | YupArray= Yup[field.typeValue ? field.typeValue : "string"]();
  for (const rule of field.validations) {
    switch (rule.type) {
      case "isTrue":
        schema = (schema as YupBoolean).isTrue(rule.message);
        break;
      case "isEmail":
        schema = (schema as YupString).email(rule.message);
        break;
      case "minLength":
        schema = (schema as YupString | YupArray).min(rule?.value as number, rule.message);
        break;
      case "maxLength":
        schema = (schema as YupString).max(rule.value as number, rule.message);
        break;
      case "matches":
        schema = (schema as YupString).matches(
          rule.value as RegExp,
          rule.message
        );
        break;
      default:
        schema = schema.required(rule.message);
        break;
    }
  }

  return schema;
};

type Form = "login";

export const getInputs = (section: Form) => {
  const initialValues: { [key: string]: any } = {};

  const validationsFields: { [key: string]: any } = {};

  for (const field of forms[section]) {
    initialValues[field.name] = field.value;

    if (!field.validations) continue;

    const schema = generateValidations(field);

    validationsFields[field.name] = schema;
  }

  return {
    validationSchema: Yup.object({ ...validationsFields }),
    initialValues,
    inputs: forms[section],
  };
};

export const getInputsv2 = (section: string, form: { [x: string]: InputProps[] }, initializer?: { [key: string]: any }) => {
  let initialValues: { [key: string]: any } = {};

  const validationsFields: { [key: string]: any } = {};

  for (const field of form[section]) {
    if(initializer) initialValues = initializer;
    else initialValues[field.name] = field.value;

    if (!field.validations) continue;

    const schema = generateValidations(field);

    validationsFields[field.name] = schema;
  }

  return {
    validationSchema: Yup.object({ ...validationsFields }),
    initialValues,
    inputs: form[section],
  };
};
