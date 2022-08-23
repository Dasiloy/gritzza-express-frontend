import { useState } from "react";
import { FormikHelpers } from "formik";
import authClient from "api/auth-client";
import { toast } from "react-hot-toast";
import { ForgotPasswordDto } from "types/auth";

export default function useForgotPassword() {
  const [loading, setLoading] = useState(false);

  const triggerForgetPasswordAction = async (
    forgotPasswordDto: ForgotPasswordDto,
    formikHelpers: FormikHelpers<ForgotPasswordDto>
  ) => {
    setLoading(true);
    try {
      await authClient.post(
        "/forgot-password",
        forgotPasswordDto
      );
      formikHelpers.resetForm();
      toast.success(
        "Password reset link sent to your email"
      );
    } catch (error: any) {
      const message =
        error.response.data.message ||
        "Something went wrong";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    triggerForgetPasswordAction,
    loading,
  };
}
