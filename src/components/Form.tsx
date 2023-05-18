import { Form as FormFormik, Formik } from "formik";
import {
  CustomCheckBox,
  CustomRadioGroup,
  CustomTextInput,
  CustomSelect,
  Layout,
  CustomCheckboxGroup,
  CustomFieldArrays,
  CustomTextarea,
} from ".";
import { getInputs } from "../utils";
import { FormContext } from "./LayoutForm";
import { useContext } from "react";

export const Form = () => {

  const { formSchema, setvalues, formTitle, className, onSubmit: callback, initialformdata } = useContext(FormContext)
  const { initialValues, inputs, validationSchema } = getInputs("login", formSchema, initialformdata);

  return (
    <Layout title={formTitle} className={className}>
      <Formik
        {...{ initialValues, validationSchema }}
        onSubmit={(values) => {
          if(callback) callback(values)
          setvalues(values);
        }}
      >
        {({ values }) => (
          <FormFormik noValidate>
            {inputs.map(({ name, type, ...props }) => {
              switch (type) {
                case "select":
                  return (
                    <CustomSelect
                      key={name}
                      label={props.label!}
                      name={name}
                      options={props.options!}
                    />
                  );

                case "radio-group":
                  return (
                    <CustomRadioGroup
                      label={props.label!}
                      name={name}
                      options={props.options!}
                      key={name}
                    />
                  );

                case "checkbox-group":
                  return (
                    <CustomCheckboxGroup
                      label={props.label!}
                      name={name}
                      options={props.options!}
                      key={name}
                    />
                  );

                case "checkbox":
                  return (
                    <CustomCheckBox
                      label={props.label!}
                      key={name}
                      name={name}
                    />
                  );

                case "field-array":
                  return (
                    <CustomFieldArrays
                      label={props.label!}
                      key={name}
                      name={name}
                      fields={props.fields!}
                      values={values}
                    />
                  );

                case "textarea":
                  return (
                    <CustomTextarea
                      label={props.label!}
                      key={name}
                      name={name}
                      placeholder={props.placeholder}
                      type={type}
                    />
                  );

                default:
                  return (
                    <CustomTextInput
                      label={props.label!}
                      key={name}
                      name={name}
                      placeholder={props.placeholder}
                      type={type}
                    />
                  );
              }
            })}
            <button
              className="w-full hover:shadow-form rounded-md bg-[#2980B9] py-3 text-center text-base font-semibold text-white outline-none my-4"
              type="submit"
            >
              SEND
            </button>
          </FormFormik>
        )}
      </Formik>
    </Layout>
  );
};
