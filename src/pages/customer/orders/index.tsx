import React from "react";
import type { AuthPage } from "types/auth-page";

const UserOrders: AuthPage = () => {
  return <div>User Dashboard</div>;
};

UserOrders.auth = {
  permissions: [],
};

export default UserOrders;
