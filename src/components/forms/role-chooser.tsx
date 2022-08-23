import React from "react";
import { UserRole } from "types/auth";
import MuiGrid from "material-ui/components/grid";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import MuiButton from "material-ui/components/button";

export interface IRoleChooserProps {
  selectRole: (role: UserRole) => void;
  role: UserRole;
}

export default function RoleChooser({
  role,
  selectRole,
}: IRoleChooserProps) {
  return (
    <MuiGrid
      container
      spacing={{
        xs: 2,
        sm: 4,
      }}
      marginBottom={2}>
      <RoleButton
        role={UserRole.USER}
        selectRole={selectRole}
        selected={role === UserRole.USER}
        startIcon={<ShoppingCartCheckoutOutlinedIcon />}
      />
      <RoleButton
        selectRole={selectRole}
        role={UserRole.MERCHANT}
        selected={role === UserRole.MERCHANT}
        startIcon={<PeopleAltOutlinedIcon />}
      />
    </MuiGrid>
  );
}

export interface IRoleChooserButtonProps
  extends IRoleChooserProps {
  selected: boolean;
  startIcon: React.ReactNode;
}

export function RoleButton({
  role,
  selected,
  selectRole,
  startIcon,
}: IRoleChooserButtonProps) {
  return (
    <MuiGrid item xs={6}>
      <MuiButton
        fullWidth
        color="primary"
        startIcon={startIcon}
        variant={selected ? "contained" : "outlined"}
        onClick={() => selectRole(role)}>
        {role}
      </MuiButton>
    </MuiGrid>
  );
}
