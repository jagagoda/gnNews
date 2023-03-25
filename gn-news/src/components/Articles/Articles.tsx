import { useEffect, useState } from "react";
import {
  GridItem,
  Center,
  Grid,
  Box,
  Text,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import ArticleCard from "components/ArticleCard";
import countries, { Country } from "config/countries";
import { useGetArticles } from "hooks";
import { selectNewsData } from "redux/selectors";

type Params = {
  country: Country;
};

const Articles = () => {
  const { t } = useTranslation();
  const { country } = useParams<Params>();
  const { fetch } = useGetArticles();
  const [invalidCountry, setInvalidCountry] = useState<boolean>(false);
  const { isLoading, error, data } = useSelector(selectNewsData);

  useEffect(() => {
    if (!country || !countries.includes(country)) {
      setInvalidCountry(true);
      return;
    }

    setInvalidCountry(false);
    fetch(country);
  }, [country]);

  if (invalidCountry) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>{t("articles:invalidCountry")}</AlertTitle>
      </Alert>
    );
  }

  return (
    <VStack>
      <Box w="full" bg="gray.100" marginBottom="5">
        <Center>
          <Text fontSize="2xl" p="8">
            {t("articles:header")} {t(`countries:${country}`)}
          </Text>
        </Center>
      </Box>

      {isLoading &&
         <Spinner size='xl' />
      }

      {!isLoading && (
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(8, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={4}>
            <ArticleCard />
          </GridItem>
          <GridItem colSpan={2}>
            <ArticleCard />
          </GridItem>
          <GridItem colSpan={2}>
            <ArticleCard />
          </GridItem>
          <GridItem colSpan={2}>
            <ArticleCard />
          </GridItem>
          <GridItem colSpan={2}>
            <ArticleCard />
          </GridItem>
          <GridItem colSpan={2}>
            <ArticleCard />
          </GridItem>
          <GridItem colSpan={2}>
            <ArticleCard />
          </GridItem>
        </Grid>
      )}
    </VStack>
  );
};

export default Articles;
