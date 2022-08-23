import React from "react";
import useLogIn from "hooks/use-log-in";
import AuthLayout from "layout/auth";
import { LoginSchema } from "schemas/form-schemas";
import { useFormik } from "formik";
import disablehandler from "utils/form-button-diasble-util";
import TextInput from "components/forms/text-input";
import PasswordInput from "components/forms/password-input";
import { ContainedButton } from "material-ui/styled/buttons";
import MuiStack from "material-ui/components/stack";
import { SubBody } from "material-ui/styled/typography";
import BaseLink from "components/general/base-link";

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
        label="Username or Email"
        name="identifier"
        size="small"
        variant="filled"
        placeholder="Enter your username"
        value={values.identifier}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched.identifier && Boolean(errors.identifier)
        }
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
      <MuiStack
        direction="row"
        spacing={1}
        justifyContent="flex-end"
        alignItems="center"
        mt={-3}
        mb={3}>
        <BaseLink href="/auth/forgot-password" text="Forgot password?" />
      </MuiStack>
      <ContainedButton
        type="submit"
        loading={loading}
        // disabled={disabled}
        fullWidth
        sx={{
          marginBottom: "1rem",
        }}>
        Log in
      </ContainedButton>
      <MuiStack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="baseline"
        mt={1}>
        <SubBody gutterBottom={false} mb={0}>
          Not registered?
        </SubBody>
        <BaseLink href="/auth/sign-up" text="Create an account" />
      </MuiStack>
    </AuthLayout>
  );
}
