import { FC } from "react";
import {
  Box,
  Flex,
  chakra,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { format } from "date-fns";

import { Article } from "../types";
import ArticleModal from "./ArticleModal";

const ArticleCard: FC<Article> = ({
  author,
  description,
  publishedAt,
  title,
  content,
  urlToImage,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        bg="#edf3f8"
        _dark={{ bg: "#3e3e3e" }}
        p={50}
        w="full"
        h="full"
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
            src={
              urlToImage ??
              "https://images.placeholders.dev/?width=1055&height=100"
            }
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
                {format(Date.parse(publishedAt), "dd.MM.yyyy HH:ii")}
              </chakra.span>
              <Link
                display="block"
                fontWeight="bold"
                fontSize="xl"
                mt={2}
                onClick={onOpen}
              >
                {title}
              </Link>
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
                {description}
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <chakra.span
                    mx={2}
                    fontWeight="bold"
                    color="gray.700"
                    _dark={{ color: "gray.200" }}
                  >
                    {author}
                  </chakra.span>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>

      <ArticleModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        content={content}
      />
    </>
  );
};
export default ArticleCard;
