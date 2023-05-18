import * as Yup from "yup";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { Layout } from "../components";

export const FormikBasicArray = () => {
  const initialValues = {
    fullName: "",
    items: [
      {
        title: "",
        desc: "",
      },
    ],
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().min(3, "Min. 3 characters").required("Required"),
    items: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("El titulo es requerido"),
        desc: Yup.string().required("El descripcion es requerido"),
      })
    ),
  });

  const name = "items";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <Layout title="Formik Basic">
            <label htmlFor="fullName">First Name</label>
            <Field name="fullName" type="text" />
            <ErrorMessage name="fullName" />
            <FieldArray name={`${name}`}>
              {({ push, remove }) => (
                <>
                  {values.items.map((_, index) => (
                    <div key={index}>
                      <Field
                        name={`${name}[${index}].title`}
                        placeholder="Titulo"
                      />
                      <ErrorMessage
                        name={`${name}.${index}.title`}
                        component="div"
                      />
                      <Field
                        name={`${name}[${index}].desc`}
                        placeholder="Descripcion"
                      />
                      <ErrorMessage
                        name={`${name}.${index}.desc`}
                        component="div"
                      />
                      <button type="button" onClick={() => remove(index)}>
                        Eliminar
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => push({ title: "", desc: "" })}
                  >
                    Agregar
                  </button>
                </>
              )}
            </FieldArray>
            <button type="submit">Submit</button>
          </Layout>
        </Form>
      )}
    </Formik>
  );
};
