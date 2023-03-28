import { chakra } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { selectNewsData } from "store/selectors";

const ArticlesCount = () => {
  const { t } = useTranslation();
  const { records } = useSelector(selectNewsData);

  return (
    <chakra.p color="baseFontLight" py={{ base: "2", sm: "0" }}>
      {t("articles:count")}: {records.length}
    </chakra.p>
  );
};

export default ArticlesCount;
