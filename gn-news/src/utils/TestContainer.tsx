import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";

import theme from "config/global-styles";
import { i18nTestingInstance } from "i18n";

type Props = {
  children: JSX.Element;
};

const TestContainer: FC<Props> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18nTestingInstance}>{children}</I18nextProvider>
    </ChakraProvider>
  );
};

export default TestContainer;