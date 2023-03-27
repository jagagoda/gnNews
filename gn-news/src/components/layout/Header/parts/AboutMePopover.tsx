import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const AboutMePopover = () => {
  const { t } = useTranslation();
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          role="button"
          aria-label="Some box"
          p={5}
          w="full"
          children={t("homePage:aboutMe.button")}
          _hover={{ color: "#6B8187", textDecoration: "underline" }}
          bg="transparent"
          color="#fff"
        />
      </PopoverTrigger>
      <PopoverContent
        bg="white"
        color="#030303"
        border="1px solid #gray.300"
        boxShadow="0 4px 6px -6px #222"
        p="2"
      >
        <PopoverHeader fontWeight="semibold">
          {" "}
          {t("homePage:aboutMe.header")}
        </PopoverHeader>
        <PopoverArrow bg="white" />
        <PopoverCloseButton bg="white" />
        <PopoverBody>{t("homePage:aboutMe.content")}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default AboutMePopover;
