import React from "react";
import type { AuthPage } from "types/auth-page";

const UserSettings: AuthPage = () => {
  return <div>User Dashboard</div>;
};

UserSettings.auth = {
  permissions: [],
};

export default UserSettings;
