import { Flex, VStack } from "@chakra-ui/react";

import { ArticlesCount, Clock } from "./parts";

const Footer = () => {
  return (
    <Flex
      w="full"
      p={2}
      alignItems="flex-end"
      justifyContent="center"
      bg="baseBlueBackground"
      borderTop="1px #EDEDF7"
      marginTop="1px"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
      >
        <VStack py={{ base: "2", sm: "0" }} color="baseFontDark">
          {" "}
          <ArticlesCount />
        </VStack>
        <Flex mx="-2">
          <Clock />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
