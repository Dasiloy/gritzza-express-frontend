import React from "react";
import ClickAwayListener, {ClickAwayListenerProps} from "@mui/material/ClickAwayListener";

function MuiClickaway({
  onClickAway = () => {},
  children,
}:ClickAwayListenerProps) {
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      {children}
    </ClickAwayListener>
  );
}

export default MuiClickaway;
