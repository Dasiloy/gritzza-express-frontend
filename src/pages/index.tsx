import type { NextPage } from "next";
import ThemeSwitch from "material-ui/theme/theme-toggler-switch";
import { MainBody } from "material-ui/styled/typography";
import MuiBox from "material-ui/components/box";
import Link from "next/link";
import toast from "react-hot-toast";
import LogOutButton from "components/root/log-out-button";

const Home: NextPage = () => {
  return (
    <MuiBox sx={{ maxWidth: 400, mx: "auto" }}>
      <ThemeSwitch />
      <br />
      <LogOutButton />
      <MainBody>some text here</MainBody>
      <Link href="/auth/sign-up">
        <a>About</a>
      </Link>
      <button
        type="button"
        onClick={() => toast.error("an error occurred")}>
        click me
      </button>
    </MuiBox>
  );
};

export default Home;
