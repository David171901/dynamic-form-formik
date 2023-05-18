import { ErrorMessage, useField } from "formik"

interface Props {
    options: Opt[]
    label: string;
    name: string;
    [x: string]: any
}

type Opt = { value: string | number, desc: string }

export const CustomSelect = ({ label, ...props }: Props) => {
    const [field] = useField(props)

    return (
        <>
            <div>
                <label className="mb-1 block text-base font-medium text-[#000000]">{label}</label>
                <select {...field} {...props} className="w-full rounded-md border border-[#000000] bg-white py-3 px-6 text-base text-[#000000] outline-none focus:border-[#2980B9] focus:shadow-md">
                    <option value="">--- Select ---</option>
                    {
                        props.options.map(({ desc, value }) => (
                            <option
                                value={value}
                                key={value}
                            >{desc}</option>
                        ))
                    }
                </select>
                <ErrorMessage name={props.name} component="span" className="mt-2 text-sm text-[#E74C3C]" />
            </div>
        </>
    )
}
