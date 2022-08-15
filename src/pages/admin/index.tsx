import React from "react";
import type { AuthPage } from "types/auth-page";

const AdminDashboard: AuthPage = () => {
  return <div>Admin Dashboard</div>;
};

AdminDashboard.auth = {
  permissions: [],
};

export default AdminDashboard;
