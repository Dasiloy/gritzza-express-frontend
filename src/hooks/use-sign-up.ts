import { useState } from "react";
import authClient from "api/auth-client";
import {
  CreateUserDto,
  SignupResponseData,
} from "types/auth";
import { deleteCookie } from "cookies-next";
import { FormikHelpers } from "formik";
import { ISignUpValues } from "views/auth/sign-up";
import { toast } from "react-hot-toast";
import useAppClientStore from "lib/zustand/store";

export default function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setTempUser, tempUser } =
    useAppClientStore();

  const signUpUser = async (
    createUserDto: CreateUserDto,
    formikHelpers: FormikHelpers<ISignUpValues>
  ) => {
    setLoading(true);
    try {
      const response = await authClient.post(
        "/signup",
        createUserDto
      );
      const user = response.data as SignupResponseData;
      deleteCookie("token");
      setTempUser(user);
      formikHelpers.resetForm();
      toast.success("Successfully signed up");
    } catch (error: any) {
      setTempUser(null);
      const message =
        error?.response?.data?.message ||
        "Something went wrong";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    user: tempUser,
    loading,
    signUpUser,
  };
}
