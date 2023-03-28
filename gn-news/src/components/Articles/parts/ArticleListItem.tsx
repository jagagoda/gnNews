import { FC } from "react";
import {
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

const ArticleListItem: FC<Article> = ({
  author,
  description,
  publishedAt,
  title,
  content,
  url,
  source,
  urlToImage,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        bg="transparent"
        py={50}
        px={50}
        w="full"
        h="full"
        alignItems="center"
        gap={4}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Image
          border="10px solid #BFC0DE"
          rounded="md"
          w={300}
          h={200}
          fit="cover"
          src={
            urlToImage ??
            "https://images.placeholders.dev/?width=128&height=100"
          }
          alt="Article"
        />

        <Flex justifyContent="space-between" direction="column" height="full">
          <Stack>
            <chakra.span
              fontSize="sm"
              textTransform="uppercase"
              color="baseFontDark"
            >
              {format(Date.parse(publishedAt), "dd.MM.yyyy HH:ii")}
            </chakra.span>

            <Link
              display="block"
              fontWeight="bold"
              fontSize="xl"
              onClick={onOpen}
            >
              {title}
            </Link>

            <chakra.p mt={2} fontSize="sm" color="baseFontDark">
              {description}
            </chakra.p>
          </Stack>
          <chakra.span
            mx={2}
            fontWeight="bold"
            color="baseFontDark"
            textTransform="uppercase"
            fontSize="sm"
          >
            {source?.name}
          </chakra.span>
        </Flex>
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

export default ArticleListItem;
