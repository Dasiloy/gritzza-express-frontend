import React from "react";
import Slide, { SlideProps } from "@mui/material/Slide";

function MuiSlide({
  direction = "left",
  unmountOnExit = true,
  mountOnEnter = true,
  children,
  ...rest
}:SlideProps) {
  return (
    <Slide
      direction={direction}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      {...rest}>
      {children}
    </Slide>
  );
}

export default MuiSlide;
