import MuiTypography from "material-ui/components/typography";
import { TypographyProps } from "@mui/material/Typography";

export interface ITypographyprops extends TypographyProps {
  capitalize?: boolean;
}

export const HeadingOne = ({
  capitalize = false,
  sx,
  ...rest
}: ITypographyprops) => {
  return (
    <MuiTypography
      variant={"h1"}
      {...rest}
      sx={{
        textTransform: capitalize ? "capitalize" : "none",
        ...sx,
      }}
    />
  );
};

export const HeadingTwo = ({
  capitalize = false,
  sx,
  ...rest
}: ITypographyprops) => {
  return (
    <MuiTypography
      variant={"h2"}
      {...rest}
      sx={{
        textTransform: capitalize ? "capitalize" : "none",
        ...sx,
      }}
    />
  );
};

export const HeadingThree = ({
  capitalize = false,
  sx,
  ...rest
}: ITypographyprops) => {
  return (
    <MuiTypography
      variant={"h3"}
      {...rest}
      sx={{
        textTransform: capitalize ? "capitalize" : "none",
        ...sx,
      }}
    />
  );
};

export const HeadingFour = ({
  capitalize = false,
  sx,
  ...rest
}: ITypographyprops) => {
  return (
    <MuiTypography
      variant={"h4"}
      {...rest}
      sx={{
        textTransform: capitalize ? "capitalize" : "none",
        ...sx,
      }}
    />
  );
};

export const HeadingFive = ({
  capitalize = false,
  sx,
  ...rest
}: ITypographyprops) => {
  return (
    <MuiTypography
      variant={"h5"}
      {...rest}
      sx={{
        textTransform: capitalize ? "capitalize" : "none",
        ...sx,
      }}
    />
  );
};

export const HeadingSix = ({
  capitalize = false,
  sx,
  ...rest
}: ITypographyprops) => {
  return (
    <MuiTypography
      variant={"h6"}
      {...rest}
      sx={{
        textTransform: capitalize ? "capitalize" : "none",
        ...sx,
      }}
    />
  );
};

export const MainBody = ({ ...rest }: TypographyProps) => {
  return <MuiTypography variant={"body1"} {...rest} />;
};

export const SubBody = ({ ...rest }: TypographyProps) => {
  return <MuiTypography variant={"body2"} {...rest} />;
};

export const SubTitle2 = ({ ...rest }: TypographyProps) => {
  return <MuiTypography variant="subtitle2" {...rest} />;
};

export const SubTitle1 = ({ ...rest }: TypographyProps) => {
  return <MuiTypography variant="subtitle1" {...rest} />;
};
