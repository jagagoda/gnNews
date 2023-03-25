import {
  Box, Flex, chakra, Image, Link
} from "@chakra-ui/react";

const ArticleCard = () => {
  return (
    <Flex
    bg="#edf3f8"
    _dark={{ bg: "#3e3e3e" }}
    p={50}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg="white"
      w="full"
      _dark={{ bg: "gray.800" }}
    
    >
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <Box p={4}>
        <Box>
          <chakra.span
            fontSize="xs"
            textTransform="uppercase"
            color="brand.600"
            _dark={{ color: "brand.400" }}
          >
                21 SEP 2015
          </chakra.span>
          <Link
            display="block"
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
            fontSize="xl"
            mt={2}
            _hover={{ color: "gray.600", textDecor: "underline" }}
          >
            I Built A Successful Blog In One Year
          </Link>
          <chakra.p
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam
            mauris egestas quam volutpat viverra. In pretium nec senectus
            erat. Et malesuada lobortis.
          </chakra.p>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              <Image
                h={10}
                fit="cover"
                rounded="full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <Link
                mx={2}
                fontWeight="bold"
                color="gray.700"
                _dark={{ color: "gray.200" }}
              >
                Jone Doe
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  </Flex>
  );
};
export default ArticleCard