import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const CustomCheckBox = (props: Props) => {
  const [field] = useField(props);

  return (
    <>
      <div>
        <div className="flex items-center">
          <label className="text-gray-900 flex justify-center items-center">
            <input
              type="checkbox"
              {...field}
              {...props}
              className="h-4 w-4 border-gray-300  mr-2"
            />
            {props.label}
          </label>
        </div>

        <ErrorMessage
          name={props.name}
          component="span"
          className="mt-2 text-sm text-[#E74C3C]"
        />
      </div>
    </>
  );
};
