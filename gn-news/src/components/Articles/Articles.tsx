import { useEffect, useState } from "react";
import {
  Center,
  Box,
  Text,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  Spinner,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import countries, { Country } from "config/countries";
import { useGetArticles } from "hooks";
import { selectNewsData, selectNewsView } from "store/selectors";

import { ArticleCard, ArticleListItem } from "./parts";

type Params = {
  country: Country;
};

const Articles = () => {
  const { t } = useTranslation();
  const { country } = useParams<Params>();
  const { fetch } = useGetArticles();
  const [invalidCountry, setInvalidCountry] = useState<boolean>(false);
  const { isLoading, error, records } = useSelector(selectNewsData);
  const view = useSelector(selectNewsView);

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
        <AlertTitle>{t("articles:alerts.invalidCountry")}</AlertTitle>
      </Alert>
    );
  }

  return (
    <VStack w="full">
      <Box w="full" bg="white" marginBottom="5">
        <Center>
          <Text fontSize="2xl" p="8"  textTransform="uppercase" color="#708087">
            {t("articles:header")} {t(`countries:${country}`)}
          </Text>
        </Center>
      </Box>

      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{t("articles:alerts.error")}</AlertTitle>
        </Alert>
      )}

      {isLoading && <Spinner size="xl" />}

      {!isLoading && (
        <Wrap gap={4}>
          {records.map((article, key) => {
            if (view === "cards") {
              return (
                <WrapItem
                  key={key}
                  w={{
                    base: "100%",
                    lg: "32%",
                  }}
                >
                  <ArticleCard {...article} />
                </WrapItem>
              );
            }

            return(
              <WrapItem key={key} w="100%">
                <ArticleListItem {...article} />
              </WrapItem>
            )
          })}
        </Wrap>
      )}
    </VStack>
  );
};

export default Articles;
