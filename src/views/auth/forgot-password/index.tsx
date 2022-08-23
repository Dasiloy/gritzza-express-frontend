import AuthLayout from "layout/auth";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "schemas/form-schemas";
import { ForgotPasswordDto } from "types/auth";
import TextInput from "components/forms/text-input";
import useForgotPassword from "hooks/use-forgot-password";
import { ContainedButton } from "material-ui/styled/buttons";
import MuiBox from "material-ui/components/box";
import { SubBody } from "material-ui/styled/typography";
import { StyledtextButton } from "material-ui/styled/buttons";

const initialValues: ForgotPasswordDto = {
  email: "",
};

export default function forgotPasswordForm() {
  const { loading, triggerForgetPasswordAction } =
    useForgotPassword();
  const {
    handleSubmit,
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: triggerForgetPasswordAction,
  });

  return (
    <AuthLayout
      title="Forgot Password"
      onSubmit={handleSubmit}>
      <TextInput
        fullWidth
        label="Email"
        name="email"
        size="small"
        variant="filled"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <ContainedButton
        type="submit"
        loading={loading}
        // disabled={disabled}
        fullWidth
        sx={{
          marginBottom: "1rem",
        }}>
        Send Password Reset Link
      </ContainedButton>
      <MuiBox
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
        <SubBody>Didn't get the email?</SubBody>
        <StyledtextButton type="submit">
          Resend
        </StyledtextButton>
      </MuiBox>
    </AuthLayout>
  );
}
