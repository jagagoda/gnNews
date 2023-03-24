import { Button, chakra, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Clock from "./Clock";

const Footer = () => {
  return (
    <Flex
      w="full"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
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
          <chakra.p
            py={{ base: "2", sm: "0" }}
            color="gray.800"
            _dark={{ color: "white" }}
          >
            Liczba wyświetlonych artykułów: 12
          </chakra.p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer