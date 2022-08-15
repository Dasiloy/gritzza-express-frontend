import React from "react";
import type { AuthPage } from "types/auth-page";

const UserSingleOrderPage: AuthPage = () => {
  return <div>User Dashboard</div>;
};

UserSingleOrderPage.auth = {
  permissions: [],
};

export default UserSingleOrderPage;
