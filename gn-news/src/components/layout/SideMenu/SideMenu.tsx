import { chakra, Button, List, ListItem, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { countries } from "config";
import Flag from "components/Flag";

const SideMenu = () => {
  const { t } = useTranslation();

  return (
    <chakra.nav px="8">
      <List spacing="8">
        <Text fontSize="xl">Select a country...</Text>
        {countries.map((key) => {
          return (
            <ListItem minWidth="10rem" key={key}>
              <Button
                as={Link}
                to={`/country/${key}`}
                variant="link"
                leftIcon={<Flag country={key} />}
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
