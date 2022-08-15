import { useState } from "react";
import apiClient from "api/api-client";
import {
  CreateUserDto,
  SignupResponseData,
} from "types/auth";
import { deleteCookie } from "cookies-next";

export default function useSignup() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] =
    useState<SignupResponseData | null>(null);

  const signUpUser = async (
    createUserDto: CreateUserDto
  ) => {
    setLoading(true);
    setError(false);
    try {
      const response = await apiClient.post(
        "/auth/signup",
        createUserDto
      );
      const data = response.data as SignupResponseData;
      deleteCookie("token");
      setUser(data);
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
    signUpUser,
  };
}
