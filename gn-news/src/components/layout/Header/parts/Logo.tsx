import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import pigeon from "assets/pigeon.png"

const Logo = () => {
  return (
    <Button
      as={Link}
      to="/"
      variant="link"
      color="#fff"
      size="lg"
      fontSize="20px"
      width="120"
      leftIcon={<img src={pigeon} width="24px" height="24px" alt="GN NEWS" />}
      _hover={{ color: "#6B8187" }}
    >
      GN NEWS
    </Button>
  );
};

export default Logo;
