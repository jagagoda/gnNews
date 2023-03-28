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
          bg="transparent"
          color="#fff"
          as={Button}
          rightIcon={<Flag country={language as Language} />}
          _hover={{ color: "#6B8187", textDecoration: "underline" }}
        >
          <chakra.span display={{ base: "none", md: "block" }}>{t(`languages:${language}`)}</chakra.span>
        </MenuButton>
        <MenuList  _hover={{textDecoration: "underline" }}>
          {languages
            .filter((listLanguage) => listLanguage !== language)
            .map((language, key) => {
              return (
                <MenuItem
                  bg="transparent"
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
