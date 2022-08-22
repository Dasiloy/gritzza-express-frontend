import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  identifier: Yup.string().required(
    "Identifier is required"
  ),
  password: Yup.string().required("password is required"),
});

export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Provide a valid email")
    .required("Email is required"),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().required("password is required"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), ""],
      "Passwords must match"
    )
    .required("Re-type your password"),
});

export const SignupUserSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "username must be at least 4 letters")
    .required("username is required"),
  password: Yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
      excludeEmptyString: true,
    }
  ),
  email: Yup.string()
    .email("Provide a valid email")
    .required("Email is required"),
});
