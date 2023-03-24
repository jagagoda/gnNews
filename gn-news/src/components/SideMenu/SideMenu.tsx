import { chakra, Button, List, ListItem, Text } from "@chakra-ui/react";
import flags from "assets/flags";
import { Link } from "react-router-dom";

const countries = {
  pl: "Poland",
  us: "United States",
  it: "Italy",
  jp: "Japan",
};

const SideMenu = () => {
  return (
    <chakra.nav>
      <List>
        {Object.entries(countries).map(([key, item]) => {
          return (
            <ListItem key={key}>
              <Button
                as={Link}
                to={`/country/${key}`}
                variant="link"
                leftIcon={
                  <chakra.img
                    src={flags[key]}
                    width="16px"
                    height="12px"
                    border="1px"
                    alt={key}
                  />
                }
              >
                {item}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </chakra.nav>
  );
};

export default SideMenu;
