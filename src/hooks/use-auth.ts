import { useEffect, useState } from "react";
import apiClient from "api/api-client";
import { IUser } from "types/user";
import { signIn } from "utils/sign-in";

export default function useAuth() {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getUser() {
      setLoading(true);
      setError(null);
      try {
        const { data } = await apiClient.get("/users/auth");
        setUser(data as IUser);
      } catch (error: any) {
        setError(error.message || "Unknown error");
        setUser(null);
        // 401 errors are already handled in the apiClient
        // errors here are simply server errors
        if (error.response.status !== 401) {
          await signIn();
        }
      } finally {
        setLoading(false);
      }
    }
    if (typeof window !== "undefined") {
      getUser();
    }
  }, []);

  return {
    user,
    error,
    loading,
  };
}
