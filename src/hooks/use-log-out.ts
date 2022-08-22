import { useState } from "react";
import { deleteCookie } from "cookies-next";
import useAppClientStore from "lib/zustand/store";
import { toast } from "react-hot-toast";

export default function useLogOut() {
  const [loading, setLoading] = useState(false);

  const { setUser } = useAppClientStore();

  const logOutUser = async () => {
    setLoading(true);
    try {
      setUser(null);
      deleteCookie("token");
      toast.success("You have been logged out");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    logOutUser,
  };
}
