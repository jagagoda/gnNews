import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  chakra,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Article } from "../types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: Article["title"];
  content: Article["content"];
  author: Article["author"];
  url: Article["url"];
};

const ArticleModal: FC<Props> = ({
  isOpen,
  onClose,
  title,
  content,
  author,
  url,
}) => {
  const { t } = useTranslation();
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();
  const cancelRef = useRef(null);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={5} bg="baseBlueBackground" color="baseFontLight">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{content}</ModalBody>
        <ModalBody>
          <Text as="b">{author}</Text>
        </ModalBody>
        <ModalBody>
          {" "}
          <chakra.div overflow="hidden">
            <Button
              onClick={onAlertOpen}
              color="baseFontLight"
              bg="transparent"
              p={0}
              _hover={{ color: "baseFontHoverLight" }}
            >
              <Text> [{t("articles:modal.readMore")}]</Text>
            </Button>
            <AlertDialog
              motionPreset="slideInBottom"
              leastDestructiveRef={cancelRef}
              onClose={onAlertClose}
              isOpen={isAlertOpen}
              isCentered
            >
              <AlertDialogOverlay />

              <AlertDialogContent>
                <AlertDialogHeader>{t("articles:modal.linkAlert.header")}</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                {t("articles:modal.linkAlert.content")}
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button
                    ref={cancelRef}
                    onClick={onAlertClose}
                    color="baseFontDark"
                    bg="transparent"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {t("articles:modal.linkAlert.no")}
                  </Button>
                  <Button
                    onClick={onAlertClose}
                    as={Link}
                    to={url}
                    variant="link"
                    target="_blank"
                    ml={3}
                    color="baseFontDark"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {t("articles:modal.linkAlert.yes")}
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </chakra.div>
        </ModalBody>

        <ModalFooter>
          <Button bg="#fff" color="baseFontDark" mr={3} onClick={onClose}>
            {t("articles:modal.close")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ArticleModal;
