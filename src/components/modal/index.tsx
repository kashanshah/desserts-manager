import { Modal as ChakraModal, ModalCloseButton, ModalContent, ModalOverlay, ModalProps } from '@chakra-ui/react';

export const Modal = (props: ModalProps) => {
  const { children, ...rest } = props;

  return (
    <ChakraModal {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <>{children}</>
      </ModalContent>
    </ChakraModal>
  );
};
