import { FormContainer } from "../components/FormContainer"
import { FormikDynamic } from "../components/FormikDynamic"
import { forms } from "../utils"

export const Component = () => {
 
    return (
        <div>
            <FormContainer 
                constructorForm={forms}
                className="container mx-auto"
                title="Formulario"
                onSubmit={(values) => console.log(values)}
            >
                {
                    () => (
                        <>
                            <FormikDynamic />
                        </>
                    )
                }
            </FormContainer>

        </div>
    )
}
