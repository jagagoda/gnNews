import { Button, Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ArticlesCount, Clock } from "./parts";

const Footer = () => {
  return (
    <Flex
      w="full"
      _dark={{ bg: "#3e3e3e" }}
      p={10}
      alignItems="flex-end"
      justifyContent="center"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
      >
        <Button as={Link} to="/" variant="link" color="#030303">
          GN NEWS
        </Button>          

        <VStack
          py={{ base: "2", sm: "0" }}
          color="gray.800"
          _dark={{ color: "white" }}
        >
          <Clock />
        </VStack>

        <Flex mx="-2">
          <ArticlesCount />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer