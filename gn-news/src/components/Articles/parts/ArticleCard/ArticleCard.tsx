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

import { Article } from "../../types";
import ArticleModal from "../ArticleModal";

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
          bg="baseBlueBackground"
          color="baseFontLight"
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
                color="baseFontLight"
              >
                {format(Date.parse(publishedAt), "dd.MM.yyyy HH:ii")}
              </chakra.span>
              <chakra.span mx={2} fontWeight="bold" color="baseFontLight">
                {source?.name}
              </chakra.span>
            </Flex>
            <Link
              display="block"
              fontWeight="bold"
              fontSize="xl"
              mt={2}
              onClick={onOpen}
              data-testid="title"
            >
              {title}
            </Link>
            <chakra.p mt={2} fontSize="sm" color="baseFontLight">
              {description}
            </chakra.p>{" "}
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
