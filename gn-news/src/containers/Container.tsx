import { FC } from "react";
import { Stack } from "@chakra-ui/react";

import { SideMenu, Footer, Header } from "components/layout";

type Props = {
  children: JSX.Element;
};

const Container: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Stack direction="row" gap="2" px="4">
        <SideMenu />
        {children}
      </Stack>

      <Footer />
    </>
  );
};

export default Container;
