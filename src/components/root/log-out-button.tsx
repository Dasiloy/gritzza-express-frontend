import React from "react";
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import useLogOut from "hooks/use-log-out";

const StyledLogOutButton = styled("button")(
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: "none",
    borderRadius: "50%",
    padding: "0.25rem",
    outlineColor: "transparent",
    cursor: "pointer",
  })
);

export default function LogOutButton() {
  const { loading, logOutUser } = useLogOut();
  return (
    <StyledLogOutButton onClick={logOutUser}>
      <Icon
        icon="ri:logout-circle-line"
        style={{
          color: "inherit",
          fontSize: "1.5rem",
          backgroundColor: "inherit",
        }}
      />
    </StyledLogOutButton>
  );
}
