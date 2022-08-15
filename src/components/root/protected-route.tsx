import React from "react";
import useAuth from "hooks/use-auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const { loading, user, error } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
