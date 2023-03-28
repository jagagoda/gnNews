import {
  chakra,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Icon,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";

const AboutMePopover = () => {
  const { t } = useTranslation();
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          role="button"
          aria-label="Some box"
          py={5}
          px={2}
          w="full"
          children={
            <>
              <Icon display={{ base: "block", md: "none" }} as={FaInfoCircle} />
              <chakra.span display={{ base: "none", md: "block" }}>
                {t("homePage:aboutMe.button")}
              </chakra.span>
            </>
          }
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
