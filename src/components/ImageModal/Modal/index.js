import React from "react";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  min-width: 25%;
  max-width: 75%;
  max-height: 90%;
  border-radius: 12px;
  padding: 2rem;
  &:focus {
    outline: none;
  }
`;

const CustomModal = ({ open, onClose, width, children }) => {
  return (
    <StyledModal {...{ open, onClose }} width={width}>
      <Body>{children}</Body>
    </StyledModal>
  );
};

export default CustomModal;
