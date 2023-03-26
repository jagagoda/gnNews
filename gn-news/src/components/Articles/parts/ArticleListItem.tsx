import { FC } from "react";
import {
  Flex,
  chakra,
  Image,
  Link,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { format } from "date-fns";

import { Article } from "../types";
import ArticleModal from "./ArticleModal";

const ArticleListItem: FC<Article> = ({
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
        py={4}
        px={8}
        w="full"
        h="full"
        alignItems="center"
        gap={4}
      >
        <Image
          roundedLeft="lg"
          w={128}
          fit="cover"
          src={
            urlToImage ??
            "https://images.placeholders.dev/?width=128&height=100"
          }
          alt="Article"
        />

        <VStack>
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

          <HStack>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              {format(Date.parse(publishedAt), "dd.MM.yyyy HH:ii")}
            </chakra.span>
            <chakra.span
              mx={2}
              fontWeight="bold"
              color="gray.700"
              _dark={{ color: "gray.200" }}
            >
              {author}
            </chakra.span>
          </HStack>
        </VStack>
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

export default ArticleListItem;
