import React from "react";
import type { AuthPage } from "types/auth-page";

const MerchantProfile: AuthPage = () => {
  return <div>User Dashboard</div>;
};

MerchantProfile.auth = {
  permissions: [],
};

export default MerchantProfile;
