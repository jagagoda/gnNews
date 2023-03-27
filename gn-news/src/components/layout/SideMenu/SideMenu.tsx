import { chakra, Button, List, ListItem, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { countries } from "config";
import Flag from "components/Flag";

const SideMenu = () => {
  const { t } = useTranslation();

  return (
    <chakra.nav px="8" paddingTop="10" bg="#ADD1DB">
      <List spacing="8">
        <Text fontSize="xl" color="#fff">{t(`homePage:sideMenuHeader`)}...</Text>
        {countries.map((key) => {
          return (
            <ListItem w="full" key={key}>
              <Button
                as={Link}
                to={`/country/${key}`}
                variant="link"
                leftIcon={<Flag country={key} />}
                _hover={{ color: "#6B8187" }}
                p={2}
                fontSize="lg"
                color="#fff"
              >
                {t(`countries:${key}`)}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </chakra.nav>
  );
};

export default SideMenu;
