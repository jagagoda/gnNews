import {
  chakra,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Flag from "components/Flag";
import { languages } from "config";
import { Language } from "config/languages";

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <chakra.div>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Flag country={language as Language} />}
        >
          {t(`languages:${language}`)}
        </MenuButton>
        <MenuList>
          {languages
            .filter((listLanguage) => listLanguage !== language)
            .map((language, key) => {
              return (
                <MenuItem
                  key={key}
                  onClick={() => handleLanguageChange(language)}
                >
                  <Flag country={language} />
                  <Text ml="2">{t(`languages:${language}`)}</Text>
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>
    </chakra.div>
  );
};

export default LanguagePicker;
