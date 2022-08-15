import { useState } from "react";
import apiClient from "api/api-client";
import {
  LoginResponseData,
  LoginUserDto,
  TokenUser,
} from "types/auth";
import { setCookie } from "cookies-next";

export default function useLogIn() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<TokenUser | null>(null);

  const logInUser = async (loginUserDto: LoginUserDto) => {
    setLoading(true);
    setError(false);
    try {
      const response = await apiClient.post(
        "/auth/signin",
        loginUserDto
      );
      const data = response.data as LoginResponseData;
      setCookie("token", data.token, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      setUser(data.user);
    } catch (error) {
      setError(true);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    error,
    loading,
    logInUser,
  };
}
