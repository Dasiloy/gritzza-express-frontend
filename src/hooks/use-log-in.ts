import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authClient from "api/auth-client";
import {
  LoginResponseData,
  LoginUserDto,
  TokenUser,
} from "types/auth";
import { setCookie } from "cookies-next";
import useAppClientStore from "lib/zustand/store";
import { FormikHelpers } from "formik";
import { UserRole } from "types/auth";
import { toast } from "react-hot-toast";

export default function useLogIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { setCallbackUrl, callbackUrl, setUser } =
    useAppClientStore();

  const logInUser = async (
    loginUserDto: LoginUserDto,
    formikHelpers: FormikHelpers<LoginUserDto>
  ) => {
    setLoading(true);
    try {
      const redirectUrl = callbackUrl;
      const response = await authClient.post(
        "/signin",
        loginUserDto
      );
      const data = response.data as LoginResponseData;
      setCookie("token", data.token, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      const user = data.user as TokenUser;
      setUser(user);
      formikHelpers.resetForm();
      toast.success("Logged in successfully");
      if (callbackUrl) {
        router.push(redirectUrl);
        setCallbackUrl("");
      } else {
        // use user role to determine where to redirect to
        switch (user.role) {
          case UserRole.ADMIN:
            return router.push("/admin");
          case UserRole.USER:
            return router.push("/stores");
          case UserRole.MERCHANT:
            return router.push("/merchant/store");
          default:
            return router.push("/");
        }
      }
    } catch (error: any) {
      const message =
        error.response.data.message ||
        "Something went wrong";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const callbackUrl = router.query.callbackUrl || "";
    if (callbackUrl) {
      setCallbackUrl(callbackUrl as string);
    }
  }, [router.query]);

  return {
    loading,
    logInUser,
  };
}
