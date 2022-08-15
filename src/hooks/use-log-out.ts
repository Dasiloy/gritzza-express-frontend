import { useState } from "react";
import { deleteCookie } from "cookies-next";

export default function useLogOut() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const logOutUser = async () => {
    setLoading(true);
    setError(false);
    try {
     deleteCookie("token")
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    logOutUser,
  };
}
