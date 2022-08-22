import Button, { ButtonProps } from "@mui/material/Button";
import LoadingButton, {
  LoadingButtonProps,
} from "@mui/lab/LoadingButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useRouter } from "next/router";
import { TButtonEvent } from "types/event-types";

type BaseButton = ButtonProps & LoadingButtonProps;

export type MuiButtonProps = BaseButton & {
  href?: string;
};

export default function MuiButton({
  variant,
  href,
  onClick,
  loading = false,
  sx,
  ...rest
}: MuiButtonProps) {
  const router = useRouter();
  if (loading) {
    return (
      <LoadingButton
        loading={loading}
        variant={variant}
        onClick={onClick}
        sx={{
          ...sx,
          boxShadow: "none",
          ":hover": {
            boxShadow:
              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
          },
        }}
        {...rest}
      />
    );
  }

  if (href) {
    const handleClick = (event: TButtonEvent) => {
      onClick && onClick(event);
      router.push(href);
    };
    return (
      <Button
        variant={variant}
        {...rest}
        onClick={handleClick}
        sx={{
          ...sx,
          boxShadow: "none",
          ":hover": {
            boxShadow:
              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
          },
        }}
      />
    );
  }
  return (
    <Button
      variant={variant}
      {...rest}
      onClick={onClick}
      sx={{
        ...sx,
        boxShadow:
          "none",
        ":hover": {
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        },
      }}
    />
  );
}

MuiButton.Group = ButtonGroup;
