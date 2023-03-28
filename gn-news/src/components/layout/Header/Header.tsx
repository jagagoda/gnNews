import { Box, Button, Flex, HStack, chakra } from "@chakra-ui/react";

import {
  AboutMePopover,
  ArticlesViewChanger,
  LanguagePicker,
  Logo,
} from "./parts";

export default function App() {
  return (
    <Box pos="relative">
      <chakra.header
        transition="box-shadow 0.2s"
        bg="#ADD1DB"
        w="full"
        overflowY="hidden"
        boxShadow="0px 1px 2px #EDEDF7"
        py={5}
        px={{ base: 2, md: 5 }}
      >
        <Flex w="full" h="full" px="6" align="center" justify="space-between">
          <Logo />

          <HStack spacing={{ base: 0, md: 2 }}>
            <ArticlesViewChanger />
            <LanguagePicker />
            <AboutMePopover />
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
}
