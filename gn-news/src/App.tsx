import { ChakraProvider } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { AppRouting } from "routing";
import { i18nInstance } from "i18n";
import store from "store";
import theme from "config/global-styles";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <I18nextProvider i18n={i18nInstance}>
            <AppRouting />
          </I18nextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
