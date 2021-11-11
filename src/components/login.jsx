import React from "react";
import { withFormik } from "formik";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import { useHistory } from "react-router";

const Login = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "10px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };
  const btnstyle = { margin: "8px 0" };
  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockIcon></LockIcon>
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
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

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Login
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

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 10) {
      errors.username = "Must be 10 characters or less  ";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 character with one unique";
    }

    return errors;
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      alert(
        `${values.username} your are sucessfully logged in`,
        JSON.stringify(values, null, 2)
      );
      setSubmitting(false);
    }, 1000);
    props.history.push("./all");
  },

  displayName: "BasicForm",
})(Login);

export default MyEnhancedForm;
