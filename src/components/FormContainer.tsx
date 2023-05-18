import { createContext, useState } from 'react';
import { FormContextProps, FormHandlers, InputProps } from '../interfaces/interfaces';

export const FormContext = createContext({} as FormContextProps);
const { Provider } = FormContext;

export interface Props {
    constructorForm: { [x: string]: InputProps[] }
    title?: string
    className?: string
    children: (args: FormHandlers) => JSX.Element
    onSubmit?: (values: {[key: string]: any}) => void 
}

export const FormContainer = ({ children, className, constructorForm, onSubmit ,title = "" }: Props ) => {

    const [values, setvalues] = useState<{[key: string]: any}>({})
    
    return (
        <Provider value={{
            constructorForm,
            values,
            setvalues,
            className,
            title,
            onSubmit,
        }}>
            <>
                { 
                    children({
                        values,
                        // errors,
                    })
                }
            </>
        </Provider>
    )
}
