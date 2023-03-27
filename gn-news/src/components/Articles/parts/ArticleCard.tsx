import { FC } from "react";
import {
  Box,
  Flex,
  chakra,
  Image,
  Link,
  useDisclosure,
  Stack,
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
  url,
  urlToImage,
  source,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        bg="transparent"
        _dark={{ bg: "#3e3e3e" }}
        p={5}
        w="full"
        h="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          w="full"
          minHeight="100%"
          bg="#ADD1DB"
          color="#fff"
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
          <Flex
            p={5}
            justifyContent="space-between"
            direction="column"
            height="full"
          >
            <Flex justifyContent="space-between" w="full">
              <chakra.span
                fontSize="sm"
                textTransform="uppercase"
                color="#fff"
                _dark={{ color: "brand.400" }}
              >
                {format(Date.parse(publishedAt), "dd.MM.yyyy HH:ii")}
              </chakra.span>
              <chakra.span
                mx={2}
                fontWeight="bold"
                color="#fff"
              >
                {source?.name}
              </chakra.span>
              </Flex>
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
                color="#fff"
                _dark={{ color: "gray.400" }}
              >
                {description}
              </chakra.p>
              {" "}
            
          </Flex>
        </Box>
      </Flex>

      <ArticleModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        content={content}
        author={author}
        url={url}
      />
    </>
  );
};
export default ArticleCard;
