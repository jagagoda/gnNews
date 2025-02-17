import { chakra, Button, List, ListItem, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { countries } from "config";
import Flag from "components/Flag";

const SideMenu = () => {
  const { t } = useTranslation();

  return (
    <chakra.nav px={{ base: 2, md: 8 }} paddingTop="10" bg="baseBlueBackground">
      <List spacing="8">
        <Text
          fontSize="xl"
          color="baseFontLight"
          display={{ base: "none", md: "block" }}
        >
          {t(`homePage:sideMenuHeader`)}...
        </Text>
        {countries.map((key) => {
          return (
            <ListItem w="full" key={key}>
              <Button
                as={Link}
                to={`/country/${key}`}
                variant="link"
                leftIcon={<Flag country={key} />}
                _hover={{ color: "baseFontHoverLight" }}
                p={2}
                fontSize="lg"
                color="baseFontLight"
              >
                <chakra.span display={{ base: "none", md: "block" }}>
                  {t(`countries:${key}`)}
                </chakra.span>
              </Button>
            </ListItem>
          );
        })}
      </List>
    </chakra.nav>
  );
};

export default SideMenu;
