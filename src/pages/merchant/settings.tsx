import React from "react";
import type { AuthPage } from "types/auth-page";

const MerchantSettings: AuthPage = () => {
  return <div>User Dashboard</div>;
};

MerchantSettings.auth = {
  permissions: [],
};

export default MerchantSettings;
