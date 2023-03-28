import { Text, IconButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { HiOutlineViewGrid, HiViewList } from "react-icons/hi";
import { IconType } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";

import { newsActions, View } from "store/ducks/news";
import { selectNewsView } from "store/selectors";

type Modes = {
  [key in View]: IconType;
};

const modes: Modes = {
  cards: HiOutlineViewGrid,
  list: HiViewList,
};

const ArticlesViewChanger = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const view = useSelector(selectNewsView);

  const handleViewChange = (view: View) => {
    dispatch(newsActions.changeView({ view }));
  };

  return (
    <>
      <Text color="#fff">{t("homePage:view")}:</Text>
      {Object.entries(modes).map(([key, Icon]) => {
        return (
          <IconButton
            key={key}
            color={view === key ? "#6B8187  " : "#fff"}
            colorScheme={view === key ? "#6B8187" : "white"}
            aria-label={t(`articles:view.${key}`)}
            icon={<Icon />}
            onClick={() => handleViewChange(key as View)}
            _hover={{ color: "#6B8187" }}
            size="md"
          />
        );
      })}
    </>
  );
};

export default ArticlesViewChanger;
