import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

// useFormik doesn't allows you to wrap your app
// around component

// using yup schema for form validation
// we can also pass our error message, but yup
// also has its default error message
const validationSchema = yup.object({
  firstName: yup.string().required().max(10),
});

const App: React.FC = () => {
  return (
    <div>
      <h1>Forms</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          isBeast: false,
          fruits: [],
          hero: "",
          pets: [{ type: "cat", name: "jarvis", id: "" + Math.random() }],
        }}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors: Record<string, string> = {};

        //   if (values.firstName.includes("bob")) {
        //     errors.firstName = "no bob";
        //   }

        //   return errors;
        // }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true); // can be useful to diable button
          // make async call

          console.log(data);

          setSubmitting(false); // once the async call is done
          resetForm();
        }}
      >
        {({
          values,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          // <form onSubmit={handleSubmit}>

          <Form>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field name="phoneNumber" type="input" />

            <Field name="isBeast" type="checkbox" />

            <Field name="fruits" value="apple" type="checkbox" />
            <Field name="fruits" value="mango" type="checkbox" />
            <Field name="fruits" value="banana" type="checkbox" />

            <Field name="hero" value="iron man" type="radio" />
            <Field name="hero" value="spider man" type="radio" />
            <Field name="hero" value="captain america" type="radio" />

            <button disabled={isSubmitting} type="submit">
              Submit
            </button>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
