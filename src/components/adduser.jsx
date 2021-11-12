import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../service/api";
import { useHistory } from "react-router";
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "&>*": {
      marginTop: 20,
    },
  },
});

const inititalValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 10) {
    errors.username = "Must be 10 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (`${values.phone}`.length > 10) {
    errors.phone = "Must be 10 Numbers";
  } else if (`${values.phone}`.length < 10) {
    errors.phone = "Minimum 10 Numbers";
  }

  return errors;
};

const AddUser = () => {
  const classes = useStyle();
  const history = useHistory();

  const formik = useFormik({
    initialValues: inititalValues,
    validate,

    onSubmit: (values) => {
      alert(
        `${values.name} your data is saved`,
        JSON.stringify(values, null, 2)
      );
      addUser(values);
      history.push("./all");
    },
  });
  return (
    <FormGroup className={classes.container}>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel error={formik.errors.name} htmlFor="name">
            Name
          </InputLabel>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.errors.name}
          />
          {formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </FormControl>
        <FormControl style={{ margin: "inherit" }}>
          <InputLabel
            error={formik.touched.username && formik.errors.username}
            htmlFor="username"
          >
            Username
          </InputLabel>
          <Input
            id="username"
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={formik.errors.username && formik.touched.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div style={{ color: "red" }}>{formik.errors.username}</div>
          ) : null}
        </FormControl>
        <FormControl style={{ margin: "inherit" }}>
          <InputLabel
            error={formik.touched.email && formik.errors.email}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && !!formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </FormControl>
        <FormControl style={{ margin: "inherit" }}>
          <InputLabel
            error={formik.touched.phone && formik.errors.phone}
            htmlFor="phone"
          >
            Phone
          </InputLabel>
          <Input
            id="phone"
            type="number"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            error={formik.touched.phone && formik.errors.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div style={{ color: "red" }}>{formik.errors.phone}</div>
          ) : null}
        </FormControl>
        <Button
          style={{ margin: "inherit" }}
          variant="contained"
          type="submit"
          color="primary"
        >
          Submit User
        </Button>
      </form>
    </FormGroup>
  );
};

export default AddUser;
