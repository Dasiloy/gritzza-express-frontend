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
  ...rest
}: MuiButtonProps) {
  const router = useRouter();
  if (loading) {
    return (
      <LoadingButton
        loading={loading}
        variant={variant}
        onClick={onClick}
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
      />
    );
  }
  return (
    <Button variant={variant} {...rest} onClick={onClick} />
  );
}

MuiButton.Group = ButtonGroup;
