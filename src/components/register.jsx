import React from "react";
import { withFormik } from "formik";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { addReg } from "../service/api";

const Register = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "10px auto",
  };
  const avatarStyle = {
    backgroundColor: "darkkhaki",
  };
  const btnstyle = { margin: "18px 0" };
  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockIcon></LockIcon>
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <TextField
            label="Name"
            placeholder="Enter name"
            fullWidth
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            error={errors.name && touched.name}
          />
          {errors.name && touched.name && (
            <div style={{ color: "red" }} id="feedback">
              {errors.username}
            </div>
          )}
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            name="username"
            error={errors.username && touched.username}
          />
          {errors.username && touched.username && (
            <div style={{ color: "red" }} id="feedback">
              {errors.username}
            </div>
          )}
          <TextField
            type="email"
            label="email"
            placeholder="Enter email"
            fullWidth
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            error={errors.email && touched.email}
          />
          {errors.email && touched.email && (
            <div style={{ color: "red" }} id="feedback">
              {errors.email}
            </div>
          )}
          <TextField
            type="password"
            label="Password"
            placeholder="Enter password"
            fullWidth
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name="password"
            error={errors.password && touched.password}
          />
          {errors.password && touched.password && (
            <div style={{ color: "red" }} id="feedback">
              {errors.password}
            </div>
          )}
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Register
          </Button>
        </Paper>
      </Grid>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ username: "" }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 10) {
      errors.username = "Must be 10 characters or less  ";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 character with one unique";
    }

    return errors;
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    addReg(values);
    setTimeout(() => {
      alert(
        `${values.name} your are sucessfully registered`,
        JSON.stringify(values, null, 2)
      );
      setSubmitting(false);
    }, 1000);
    props.history.push("./login");
  },

  displayName: "BasicForm",
})(Register);

export default MyEnhancedForm;
