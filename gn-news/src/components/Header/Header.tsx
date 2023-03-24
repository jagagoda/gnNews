import React from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  VStack,
  chakra,
  useColorModeValue,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import {
  AiOutlineInbox,
  AiOutlineMenu,
} from "react-icons/ai";
import {
  HiOutlineViewGrid,
  HiViewList
} from "react-icons/hi";
import {
  GiNewspaper,
} from "react-icons/gi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function App() {
  const mobileNav = useDisclosure();

  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef<HTMLDivElement | null>(null);


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
      bg={bg}
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
        bg={bg}
        w="full"
        overflowY="hidden"
      >
        <Flex w="full" h="full" px="6" align="center" justify="space-between">
          <HStack>
            <Button as={Link} to="/" variant="link" color="#030303" w="full" leftIcon={<GiNewspaper />}>
              GN NEWS
            </Button>
          </HStack>
          <Flex
            justify="flex-end"
            w="full"
            maxW="824px"
            align="center"
            color="gray.400"
          >
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
              <Icon
                as={HiOutlineViewGrid}
                display="block"
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: "gray.600" }}
              />
              <Icon
                as={HiViewList}
                display="block"
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: "gray.600" }}
              />
              <Popover>
                <PopoverTrigger>
                  <Box
                    role='button'
                    aria-label='Some box'
                    p={5}
                    w='full'
                    children='O mnie'
                  />
                </PopoverTrigger>
                <PopoverContent bg='tomato' color='white'>
                  <PopoverHeader fontWeight='semibold'>Trudności i frajda</PopoverHeader>
                  <PopoverArrow bg='pink.500' />
                  <PopoverCloseButton bg='purple.500' />
                  <PopoverBody>
                    Bla blabla bla bla blablabla.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
            <IconButton
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
    </Box >
  );
};
