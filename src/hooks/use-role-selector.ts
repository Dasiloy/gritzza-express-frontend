import React from "react";
import { UserRole } from "types/auth";

export type useRoleSelectorReturnType = [
  UserRole,
  (role: UserRole) => void
];

const useRoleSelector = (role: UserRole) => {
  const [selectedRole, setSelectedRole] =
    React.useState<string>(role);

  const chooseRole = (role: UserRole) => {
    setSelectedRole(role);
  };

  return [
    selectedRole,
    chooseRole,
  ] as useRoleSelectorReturnType;
};

export default useRoleSelector;
