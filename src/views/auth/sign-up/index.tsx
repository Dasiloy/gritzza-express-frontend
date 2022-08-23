import React from "react";
import AuthLayout from "layout/auth";
import TextInput from "components/forms/text-input";
import PasswordInput from "components/forms/password-input";
import { ContainedButton } from "material-ui/styled/buttons";
import { UserRole } from "types/auth";
import RoleChooser from "components/forms/role-chooser";
import useRoleSelector from "hooks/use-role-selector";
import { FormikHelpers, useFormik } from "formik";
import { SignupUserSchema } from "schemas/form-schemas";
import useSignup from "hooks/use-sign-up";
import disablehandler from "utils/form-button-diasble-util";
import { HeadingFour,SubBody} from "material-ui/styled/typography";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MuiIconButton from "material-ui/components/icon-button";
import { capitalize } from "lodash";
import MuiStack from "material-ui/components/stack";
import BaseLink from "components/general/base-link";


export interface ISignUpValues {
  email: string;
  username: string;
  password: string;
}

const initialValues: ISignUpValues = {
  email: "",
  username: "",
  password: "",
};

export const SignUpForm = () => {
  const [role, chooseRole] = useRoleSelector(UserRole.USER);
  const { loading, user, signUpUser } = useSignup();

  const onSubmit = async (
    values: ISignUpValues,
    formikHelpers: FormikHelpers<ISignUpValues>
  ) => {
    signUpUser({ role, ...values }, formikHelpers);
  };

  const {
    handleSubmit,
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: SignupUserSchema,
    onSubmit,
  });

  const disabled = disablehandler(values, errors, loading);

  if (user) {
    return (
      <AuthLayout title={``}>
        <MuiIconButton
          color="secondary"
          sx={{
            display: "block",
            margin: "auto",
            marginBottom: "1.5rem",
          }}>
          <MailOutlineIcon sx={{ fontSize: "7rem" }} />
        </MuiIconButton>
        <HeadingFour
          gutterBottom
          sx={{
            lineHeight: "1.8",
            textAlign: "center",
          }}>
         Welcome to G-Express!
        </HeadingFour>
        <SubBody
          sx={{
            lineHeight: "1.8",
            textAlign: "center",
          }}>
          Your account has been created{" "}
          <strong>{capitalize(user.username)}</strong>.
          Kindly check your email{" "}
          <strong>{user.email}</strong> to verify your
          account.
        </SubBody>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      addSpacing={false}
      title="Register with G-express"
      onSubmit={handleSubmit}>
      <RoleChooser role={role} selectRole={chooseRole} />
      <TextInput
        fullWidth
        name="email"
        label="Email"
        size="small"
        variant="filled"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextInput
        fullWidth
        label="Username"
        name="username"
        size="small"
        variant="filled"
        placeholder="Enter your username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
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
        // disabled={disabled}
        fullWidth
        sx={{
          marginBottom: "1rem",
        }}>
        Sign Up
      </ContainedButton>
      <MuiStack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="baseline"
        mt={1}>
        <SubBody gutterBottom={false} mb={0}>
          Already have an account?
        </SubBody>
        <BaseLink href="/auth/sign-in" text="Login" />
      </MuiStack>
    </AuthLayout>
  );
};
