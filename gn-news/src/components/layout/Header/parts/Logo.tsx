import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import pigeon from "assets/pigeon.png";

const Logo = () => {
  return (
    <Button
      as={Link}
      to="/"
      variant="link"
      color="baseFontLight"
      size="lg"
      fontSize="20px"
      width="120"
      leftIcon={<img src={pigeon} width="28px" height="28px" alt="GN NEWS" />}
      _hover={{ color: "baseFontHoverLight" }}
    >
      GN NEWS
    </Button>
  );
};

export default Logo;
