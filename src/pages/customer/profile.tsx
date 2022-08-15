import React from "react";
import type { AuthPage } from "types/auth-page";

const UserProfile: AuthPage = () => {
  return <div>User Profile</div>;
};

UserProfile.auth = {
  permissions: [],
};

export default UserProfile;
