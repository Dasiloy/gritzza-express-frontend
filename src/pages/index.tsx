import type { NextPage } from "next";
import ThemeSwitch from "material-ui/theme/theme-toggler-switch";
import { MainBody } from "material-ui/styled/typography";

const Home: NextPage = () => {
  return (
    <>
      <ThemeSwitch />
      <MainBody>some text here</MainBody>
    </>
  );
};

export default Home;
