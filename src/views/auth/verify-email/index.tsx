import React from "react";
import { useRouter } from "next/router";
import AuthLayout from "layout/auth";
import {
  SubBody,
  MainBody,
} from "material-ui/styled/typography";
import MuiBox from "material-ui/components/box";
import MuiIconButton from "material-ui/components/icon-button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import type { IFormEvent } from "types/event-types";
import { StyledtextButton } from "material-ui/styled/buttons";
import useVerifyEmail from "hooks/use-verify-email";
import useAppClientStore from "lib/zustand/store";

export default function VerifyEmailForm() {
  const { loading, message, resendVerificationToken } =
    useVerifyEmail();

  const { tempUser } = useAppClientStore();

  const resendEmail = async (e: IFormEvent) => {
    e.preventDefault();
    resendVerificationToken();
  };

  return (
    <AuthLayout
      title="Verify your Email"
      center
      onSubmit={resendEmail}>
      <MuiIconButton
        color="secondary"
        sx={{
          display: "block",
          margin: "auto",
          marginBottom: "1.5rem",
        }}>
        <MailOutlineIcon sx={{ fontSize: "7rem" }} />
      </MuiIconButton>
      <MainBody textAlign="center" gutterBottom>
        {loading ? "Verifying your email..." : message}
      </MainBody>
      <MuiBox
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
        <SubBody>Didn't get the email?</SubBody>
        <StyledtextButton type="submit">
          Resend
        </StyledtextButton>
      </MuiBox>
    </AuthLayout>
  );
}
