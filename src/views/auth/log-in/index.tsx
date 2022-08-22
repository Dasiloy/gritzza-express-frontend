import React from "react";
import useLogIn from "hooks/use-log-in";
import AuthLayout from "layout/auth";
import { LoginSchema } from "schemas/form-schemas";
import { useFormik } from "formik";
import disablehandler from "utils/form-button-diasble-util";
import TextInput from "components/forms/text-input";
import PasswordInput from "components/forms/password-input";
import { ContainedButton } from "material-ui/styled/buttons";
import {
  HeadingFour,
  SubBody,
} from "material-ui/styled/typography";
import { capitalize } from "lodash";

const initialValues = {
  identifier: "",
  password: "",
};

export default function LogInForm() {
  const { logInUser, loading } = useLogIn();

  const {
    handleSubmit,
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: logInUser,
  });

  const disabled = disablehandler(values, errors, loading);

  return (
    <AuthLayout
      title="LogIn to G-express"
      onSubmit={handleSubmit}>
      <TextInput
        fullWidth
        label="Username"
        name="identifier"
        size="small"
        variant="filled"
        placeholder="Enter your username"
        value={values.identifier}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.identifier && Boolean(errors.identifier)}
        helperText={touched.identifier && errors.identifier}
      />
      <PasswordInput
        fullWidth
        label="Password"
        name="password"
        size="small"
        variant="filled"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <ContainedButton
        type="submit"
        loading={loading}
        disabled={disabled}
        fullWidth
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}>
        Log in
      </ContainedButton>
    </AuthLayout>
  );
}
