import { Field, ErrorMessage, FieldArray, useField } from "formik";
import { Fields } from "../utils";

interface Props {
  name: string;
  label: string;
  fields: Fields[];
  values: { [key: string]: any };
  [x: string]: any;
}

export const CustomFieldArrays = ({ label, ...props }: Props) => {
  return (
    <>
      <label className="mb-1 block text-base font-medium text-[#000000]">
        {label}
      </label>
      <FieldArray {...props}>
        {({ push, remove }) => (
          <>
            {props.values[`${props.name}`].map(
              (_: { [key: string]: any }, index: number) => (
                <div key={index} className={`flex flex-col gap-y-2 md:flex-row md:gap-x-4`}>
                  {props.fields.map((input, indx) => (
                    <div key={`${props.name}${indx}`} className="grow ">
                      <label>{input.label}</label>
                      <Field
                        type="text"
                        className="w-full rounded-md border border-[#000000] bg-white py-3 px-6 text-base text-[#000000] outline-none focus:border-[#2980B9] focus:shadow-md"
                        name={`${props.name}[${index}].${input.name}`}
                        placeholder={`${input.placeholder}`}
                      />
                      <ErrorMessage
                        name={`${props.name}.${index}.${input.name}`}
                        component="div"
                      />
                    </div>
                  ))}
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (props.values[props.name].length > 1) remove(index)
                      }}
                      className="hover:shadow-form rounded-md border-2 border-[#2980B9] py-3 px-8 text-center text-base font-semibold text-black outline-none disabled:line-through"
                      disabled={props.values[props.name].length === 1}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            )}
            <button
              className=" my-4 hover:shadow-form rounded-md border-2 border-[#2980B9] py-3 px-8 text-center text-base font-semibold text-black outline-none"
              type="button"
              onClick={() =>
                push(
                  props.fields.reduce((acc: { [key: string]: any }, curr) => {
                    acc[curr.name] = "";
                    return acc;
                  }, {})
                )
              }
            >
              + Add new fields
            </button>
          </>
        )}
      </FieldArray>
    </>
  );
};
