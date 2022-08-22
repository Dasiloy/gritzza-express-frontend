import React from "react";
import { useRouter } from "next/router";
import authClient from "api/auth-client";
import { toast } from "react-hot-toast";
import useAppClientStore from "lib/zustand/store";

export default function useVerifyEmail() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [message, setMessage] = React.useState<
    null | string
  >(null);

  const { setTempUser } = useAppClientStore();

  // resend verification token
  const resendVerificationToken = async () => {
    try {
      await authClient.post("/resend-verification-token", {
        email: router.query.email,
      });
      toast.success("Verification token sent");
    } catch (error: any) {
      setMessage(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  // verify user email runs on component load
  const verifyEmail = async (email: any, token: any) => {
    try {
      setLoading(true);
      await authClient.post("/verify-email", {
        email,
        token,
      });
      setTempUser(null);
      setMessage(
        "Email verified successfully,Redirecting to log in..."
      );
      toast.success("Email verified successfully");
      setTimeout(() => {
        router.push("/auth/sign-in");
      }, 1500);
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        "Something went wrong";
      setMessage(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const { email, token } = router.query;
    if (!email || !token) return;
    verifyEmail(email, token);
  }, [router.query]);

  return {
    loading,
    message,
    resendVerificationToken,
  };
}
