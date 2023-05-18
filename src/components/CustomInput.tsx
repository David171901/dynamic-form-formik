import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    [x: string]: any
}

export const CustomTextInput = ({ label, ...props }: Props) => {

    const [field] = useField(props)

    return (
        <>
            <div>
                <label className="mb-1 block text-base font-medium text-[#000000]">{label}</label>
                <input className="w-full rounded-md border border-[#000000] bg-white py-3 px-6 text-base text-[#000000] outline-none focus:border-[#2980B9] focus:shadow-md" {...field} {...props} />
                <ErrorMessage name={props.name} component="span" className="mt-2 text-sm text-[#E74C3C]" />
            </div>
        </>
    )
}
