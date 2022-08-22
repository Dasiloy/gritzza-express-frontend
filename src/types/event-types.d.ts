import React from "react";

//==> button or mouse event
export type TButtonEvent = React.MouseEvent<
  HTMLButtonElement,
  MouseEvent
  >;

export type IInputEvent = React.ChangeEvent<HTMLInputElement>;
  
export type IFormEvent = React.FormEvent<HTMLFormElement>;
