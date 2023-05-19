# Dynamic Form Component using JSON and Formik

## Description
This custom React component is designed to provide additional functionality to our application by offering a dynamic form creation feature. It utilizes a JSON object as the initial value and leverages the Formik library for form management.

## Features

- **Dynamic Form Generation:** The component dynamically generates a form based on the provided JSON object, allowing for flexible and customizable forms.

- **Form Validation:** It supports form validation using Formik's validation schema, ensuring data integrity and error handling.

- **Form Submission:** The component handles form submission and provides an interface to perform actions or send data to a server.

## Installation
To use this dynamic form component in your React project, follow these steps:

1. Install the package via npm or yarn by running the following command:

npm install

## Usage
Here, you can provide examples of how to use your component in different scenarios:

```
import { Form, DynamicFormContainer } from "../components";
import { forms } from "../utils";

export const Component = () => {
    
  const initialformdata = {
    name: "Full Name",
    description: "Description",
    email: "cjl@torkore.com",
  };

  return (
    <div>
      <DynamicFormContainer
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
      </DynamicFormContainer>
    </div>
  );
};
```

## Props

formSchema (object): The initial form values represented as a JSON object.
action (function): A callback function invoked when the form is submitted. It receives the form values as an argument.
className (string)
title (string)