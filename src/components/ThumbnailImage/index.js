import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  height: 60%;
  width: 100%;
  z-index: 2;
  background-color: #fafafa;
`;

const ImageContainer = styled.div`
  display: inline-block;
`;

const StyledImage = styled.img`
  border: 1px solid black;
  border-radius: 8px;
  max-width: 50%;
  max-height: 50%;
`;

const AltText = styled.h5`
  margin: 0;
`;

const Image = ({ image: { altText, url } }) => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src={url} alt={altText} />
        <AltText>{altText}</AltText>
      </ImageContainer>
    </Container>
  );
};

export default Image;
