import Link from "next/link";
import { styled } from "@mui/material/styles";

const LinkButton = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontSize: "0.95rem",
  fontWeight: theme.typography.fontWeightMedium,
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

export interface IBaseLinkProps {
  href: string;
  text: string;
}

export default function BaseLink({
  href,
  text,
}: IBaseLinkProps) {
  return (
    <Link href={href}>
      <LinkButton>{text}</LinkButton>
    </Link>
  );
}
