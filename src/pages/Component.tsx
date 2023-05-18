import { Form, LayoutForm } from "../components";
import { forms } from "../utils";

export const Component = () => {
    
  const initialformdata = {
    name: "Full Name",
    description: "Description",
    email: "cjl@torkore.com",
  };

  return (
    <div>
      <LayoutForm
        formSchema={forms}
        formTitle={"Formulario"}
        className="container mx-auto"
        onSubmit={(values) => console.log(values)}
        initialformdata={initialformdata}
      >
        {() => (
          <>
            <Form />
          </>
        )}
      </LayoutForm>
    </div>
  );
};
