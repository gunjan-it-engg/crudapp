import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <TextField
        required
        id="email"
        label="Email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        defaultValue=""
      />
      {/* <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      /> */}
      <Button
        type="submit"
        variant="contained"
        style={({ borderRadius: "25px" }, { margineTop: "25px" })}
        color="primary"
      >
        submit
      </Button>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default SignupForm;
