"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

const ModalUI = ({
  title,
  children,
  isOpen,
  onOpenChange,
  placement,
  isDismissable,
  backdrop,
  size,
  hideCloseButton,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={placement}
        isDismissable={isDismissable}
        backdrop={backdrop}
        size={size}
        hideCloseButton={hideCloseButton}
        className="bg-[#171717]"
      >
        <ModalContent>
          {title && <ModalHeader>{title}</ModalHeader>}
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUI;
