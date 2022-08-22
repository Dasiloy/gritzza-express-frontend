import React from "react";
import type { AuthPage } from "types/auth-page";
import LogOutButton from "components/root/log-out-button";

const StoreDashboard: AuthPage = () => {
  return (
    <div>
      User Dashboard <LogOutButton />
    </div>
  );
};

StoreDashboard.auth = {
  permissions: [],
};

export default StoreDashboard;
