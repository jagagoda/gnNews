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
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={5} bg="#ADD1DB" color="#fff">
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
              as={Link}
              to={url}
              variant="link"
              color="#fff"
              _hover={{ color: "#708087" }}
            >
              <Text>{url}</Text>
            </Button>
          </chakra.div>
        </ModalBody>

        <ModalFooter>
          <Button bg="#708087" mr={3} onClick={onClose}>
            {t("articles:modal.close")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ArticleModal;
