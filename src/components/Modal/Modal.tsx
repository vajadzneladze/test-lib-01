import React from "react";
import {
  StyledModal,
  StyledModalBody,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
} from "./StyledModal";
import { ModalProps } from "./Modal.types";
import Button from "../Button/Button";

const Modal = ({
  size = "md",
  title = "",
  closeBtn,
  confirmBtn,
  onClick,
  isOpen = false,
  children,
}: ModalProps) => {
  return isOpen ? (
    <StyledModal isOpen={isOpen}>
      <StyledModalContent size={size}>
        {title && <StyledModalHeader> {title} </StyledModalHeader>}

        <StyledModalBody>{children}</StyledModalBody>

        {(closeBtn || confirmBtn) && (
          <StyledModalFooter>
            {closeBtn && size !== "sm" && (
              <Button variant="outlined" size="small" text={closeBtn} />
            )}
            {confirmBtn && (
              <Button
                variant="contained"
                size="small"
                text={confirmBtn}
                onClick={() => onClick()}
                style={size === "sm" ? { width: "296px" } : {}}
              />
            )}
          </StyledModalFooter>
        )}
      </StyledModalContent>
    </StyledModal>
  ) : null;
};

export default Modal;
