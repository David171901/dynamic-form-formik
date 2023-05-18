import { FormContainer } from "../components/FormContainer"
import { FormikDynamic } from "../components/FormikDynamic"
import { forms } from "../utils"

export const Component = () => {
 

    const initializer = {
        "name": "Full Name",
        "description": "Description",
        "email": "cjl@torkore.com"
      }

    return (
        <div>
            <FormContainer 
                constructorForm={forms}
                className="container mx-auto"
                title="Formulario"
                onSubmit={(values) => console.log(values)}
                initializer={initializer}
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
