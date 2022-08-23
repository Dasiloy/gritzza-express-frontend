import React from "react";
import { styled } from "@mui/material";
import MuiBox from "material-ui/components/box";
import { HeadingThree } from "material-ui/styled/typography";
import type { IFormEvent } from "types/event-types";
import MuiGrid from "material-ui/components/grid";
import BaseImage from "components/root/base-image";
import assets from "assets";

export interface IAuthLayoutProps {
  children: React.ReactNode;
  title: string;
  onSubmit?: (event: IFormEvent) => void;
  center?: boolean;
  addSpacing?: boolean;
}

const PageContainer = styled(MuiBox)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.background.level3
      : theme.palette.background.paper,
  flex: 1,
  minHeight: "100vh",
  padding: theme.spacing(4, 2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(8, 2),
  },
  [theme.breakpoints.up("md")]: {
    height: "100vh",
    overflow: "hidden",
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(10, 2),
  },
}));

const FormContainer = styled("form")(({ theme }) => ({
  width: "95%",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "90%",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "80%",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1000,
  },
}));

export default function AuthLayout({
  title,
  children,
  onSubmit = (e: IFormEvent) => {},
  center = false,
  addSpacing = true,
}: IAuthLayoutProps) {
  return (
    <PageContainer>
      <FormContainer onSubmit={onSubmit}>
        <MuiGrid
          container
          spacing={{
            xs: 2,
            sm: 4,
            md: 6,
          }}>
          <MuiGrid xs={12} sm={6} item>
            <HeadingThree
              textAlign={center ? "center" : "left"}
              gutterBottom
              display={{
                sm: "none",
              }}>
              {title}
            </HeadingThree>
            <BaseImage
              src={assets.AuthImage}
              alt="sign-up-screen-image"
            />
          </MuiGrid>
          <MuiGrid
            xs={12}
            sm={6}
            md={6}
            lg={5}
            mx="auto"
            mt={
              addSpacing
                ? {
                    sm: 2,
                    md: 4,
                    lg: 6,
                  }
                : {}
            }
            item>
            <HeadingThree
              textAlign={center ? "center" : "left"}
              gutterBottom
              display={{
                xs: "none",
                sm: "block",
              }}
              sx={{
                marginBottom: "2rem",
              }}>
              {title}
            </HeadingThree>
            {children}
          </MuiGrid>
        </MuiGrid>
      </FormContainer>
    </PageContainer>
  );
}
