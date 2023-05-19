import { ErrorMessage, useField } from "formik"
import styles from '../styles/styles.module.css'

interface Props {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    [x: string]: any
}

export const CustomTextarea = ({ label, ...props }: Props) => {

    const [field] = useField(props)

    return (
        <>
            <div>
                <label className={styles.field__label}>{label}</label>
                <textarea className={styles.field__input} {...field} {...props} rows={5} ></textarea>
                <ErrorMessage name={props.name} component="span" className={styles.field__error}  />
            </div>
        </>
    )
}
