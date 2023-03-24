import {
  Box, Flex, chakra
} from "@chakra-ui/react";

const ArticleCard = () => {
  return (
    <Flex
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <chakra.span
          fontSize="sm"
          color="gray.600"
          _dark={{ color: "gray.400" }}
        >
          Mar 10, 2019
        </chakra.span>
        <Box mt={2}>
          <chakra.h1
            fontSize="md"
            fontWeight="700"
          >
            Tytuł artykułu
          </chakra.h1>
        </Box>
        <Flex alignItems="center">
          <chakra.span
            color="gray.700"
            _dark={{ color: "gray.200" }}

            cursor="pointer"
          >
            Źródło artykułu
          </chakra.span>
        </Flex>
      </Box>
    </Flex>
  );
};
export default ArticleCard