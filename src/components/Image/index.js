import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
`;

const ImageContainer = styled.img`
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;
`;

const AltText = styled.h5``;
const Image = ({ image: { altText, url } }) => {
  return (
    <Container>
      <ImageContainer src={url} alt={altText} />
      <AltText>{altText}</AltText>
    </Container>
  );
};

export default Image;
