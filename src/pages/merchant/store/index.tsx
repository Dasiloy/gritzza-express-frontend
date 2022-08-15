import React from "react";
import type { AuthPage } from "types/auth-page";

const StoreDashboard: AuthPage = () => {
  return <div>User Dashboard</div>;
};

StoreDashboard.auth = {
  permissions: [],
};

export default StoreDashboard;
