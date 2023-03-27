import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VStack,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { AboutMePopover, ArticlesViewChanger, LanguagePicker } from "./parts";

export default function App() {
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg="white"
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

  return (
    <Box pos="relative">
      <chakra.header
        transition="box-shadow 0.2s"
        bg="#ADD1DB"
        w="full"
        overflowY="hidden"
        boxShadow="0px 1px 2px #EDEDF7"
        p={5}
      >
        <Flex w="full" h="full" px="6" align="center" justify="space-between">
          <Button
            as={Link}
            to="/"
            variant="link"
            color="#fff"
            size="lg"
            fontSize='20px'
            width="120"
            leftIcon={<GiNewspaper />}
            _hover={{color: "#6B8187"}}
          >
            GN NEWS
          </Button>
          <Flex
            justify="flex-end"
            w="full"
            maxW="824px"
            align="center"
            color="gray.400"
          >
            <HStack spacing="2" display={{ base: "none", md: "flex" }}>
              <ArticlesViewChanger />
              <LanguagePicker />
              <AboutMePopover />
            </HStack>
            <IconButton
              colorScheme="white"
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{ color: "inherit" }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
        </Flex>
        {MobileNavContent}
      </chakra.header>
    </Box>
  );
}
