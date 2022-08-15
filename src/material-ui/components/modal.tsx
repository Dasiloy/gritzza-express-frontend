import React from "react";
import Modal, { ModalProps } from "@mui/material/Modal";
import { Icon } from "@iconify/react";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import MuiBox from "./box";

export interface IMuiModalProps extends ModalProps {
  label?: string;
  width?: number;
  labelPosition?: "top" | "bottom";
  description?: string;
  closeModal?: () => void;
  showCloseButton?: boolean;
}

export function CancelButton({
  closeModal,
}: {
  closeModal: () => void;
}) {
  return (
    <Icon
      icon="ep:close-bold"
      onClick={closeModal}
      height="24px"
      width="24px"
      style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        cursor: "pointer",
        color: "#ff0000",
      }}
    />
  );
}

export default function MuiModal({
  open = false,
  onClose = () => {},
  label = "",
  description = "",
  width = 400,
  closeModal = () => {},
  showCloseButton = true,
  children,
  ...rest
}: IMuiModalProps) {
  const childrenStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width,
    bgcolor: "background.level3",
    boxShadow: 6,
    borderRadius: 4,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={label}
      aria-describedby={description}
      {...rest}>
      <MuiBox sx={childrenStyles}>
        <MuiBox
          sx={{
            py: 2,
            px: 3,
            position: "relative",
          }}>
          {showCloseButton && (
            <CancelButton closeModal={closeModal} />
          )}
          {children}
        </MuiBox>
      </MuiBox>
    </Modal>
  );
}

MuiModal.CloseButton = CancelButton
MuiModal.UnStyled = ModalUnstyled;
