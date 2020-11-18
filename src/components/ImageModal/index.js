import styled from "styled-components";
import Modal from "./Modal";
import { Close } from "@styled-icons/ionicons-solid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 75vh;
`;

const StyledImage = styled.img`
  max-width: calc(100% - 16px);
  max-height: 100%;
`;

const H2 = styled.h2`
  margin: 0 0 1rem 0;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 5%;
  right: 12.5%;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const ImageModal = ({
  image: { altText, credit, url },
  modalOpened,
  closeModal
}) => {
  return (
    <Modal onClose={closeModal} open={modalOpened}>
      <Container>
        <CloseButton onClick={closeModal}>
          <Close size="2rem" />
        </CloseButton>
        <H2>{altText}</H2>
        <ImageContainer>
          <StyledImage src={url} alt={altText} />
        </ImageContainer>

        <h5 dangerouslySetInnerHTML={{ __html: credit }} />
      </Container>
    </Modal>
  );
};

export default ImageModal;
