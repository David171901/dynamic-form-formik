import { createContext, useState } from 'react';
import { FormContextProps, FormHandlers, InputProps } from '../interfaces/interfaces';

export const FormContext = createContext({} as FormContextProps);
const { Provider } = FormContext;

export interface Props {
    constructorForm: { [x: string]: InputProps[] }
    title?: string
    className?: string
    children: (args: FormHandlers) => JSX.Element
    action?: (values: {[key: string]: any}) => void 
}

export const FormContainer = ({ children, className, constructorForm, action ,title = "" }: Props ) => {

    const [values, setvalues] = useState<{[key: string]: any}>({})
    
    return (
        <Provider value={{
            constructorForm,
            values,
            setvalues,
            className,
            title,
            action,
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
