import React from "react";
import { styled } from "@mui/material";
import MuiBox from "material-ui/components/box";
import { HeadingThree } from "material-ui/styled/typography";
import type { IFormEvent } from "types/event-types";

export interface IAuthLayoutProps {
  children: React.ReactNode;
  title: string;
  onSubmit?: (event: IFormEvent) => void;
  center?: boolean;
}

const PageContainer = styled(MuiBox)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.background.level3
      : theme.palette.background.paper,
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  minHeight: "100vh",
  padding: theme.spacing(6, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 0),
  },
}));

const FormContainer = styled("form")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.background.paper
      : theme.palette.background.level1,
  boxShadow: theme.shadows[1],
  marginX: "auto",
  padding: theme.spacing(4, 3),
  width: "100%",
  maxWidth: 480,
  minHeight:400,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 6),
  },
  [theme.breakpoints.up("lg")]: {},
}));

export default function AuthLayout({
  title,
  children,
  onSubmit = (e: IFormEvent) => { },
  center = false,
}: IAuthLayoutProps) {
  return (
    <PageContainer>
      <FormContainer onSubmit={onSubmit}>
        <HeadingThree
          textAlign={center ? "center" : "left"}
          gutterBottom
          sx={{
            marginBottom: "2rem",
          }}>
          {title}
        </HeadingThree>
        {children}
      </FormContainer>
    </PageContainer>
  );
}
