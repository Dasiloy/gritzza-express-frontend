import React from "react";
import type { AuthPage } from "types/auth-page";

const UserDashboard: AuthPage = () => {
  return <div>User Dashboard</div>;
};

UserDashboard.auth = {
  permissions: [],
};

export default UserDashboard;
