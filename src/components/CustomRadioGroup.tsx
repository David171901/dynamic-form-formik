import { useField, ErrorMessage } from "formik";

type Opt = { value: string | number; desc: string };

interface Props {
  options: Opt[];
  name: string;
  label: string;
  [x: string]: any;
}

export const CustomRadioGroup = ({ label, options, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <div>
        <label className="mb-1 block text-base font-medium text-[#000000]">
          {label}
        </label>
        {options.map((opt) => (
            <div key={opt.value} className="flex items-center">
                <label className="text-gray-900 flex justify-center items-center">
                    <input
                    {...field}
                    {...props}
                    type="radio"
                    checked={opt.value === field.value}
                    value={opt.value}
                    className="h-4 w-4 border-gray-300  mr-2"
                    />
                    {opt.desc}
                </label>
            </div>
        ))}
        <ErrorMessage name={props.name} component="span" className="mt-2 text-sm text-[#E74C3C]" />
      </div>
    </>
  );
};
