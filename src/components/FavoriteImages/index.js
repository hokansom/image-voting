import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "../ThumbnailImage";

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  width: 100%;
  height: 30vh;
  z-index: 1;
  background-color: coral;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  width: 25vw;
  height: 100%;
`;

const FavoriteImages = ({ images }) => {
  const [topImages, setTopImages] = useState([]);

  useEffect(() => {
    let sortedImages = [...images];
    sortedImages = images.sort((a, b) => b.count - a.count);
    setTopImages(sortedImages.slice(0, 3));
  }, [images]);

  return (
    <Container>
      {topImages.map((image, index) => {
        return (
          <ImageContainer>
            <h3>{`# ${index + 1}`}</h3>
            <Image {...{ image }} />
            <h4>{`Votes: ${image.count}`}</h4>
          </ImageContainer>
        );
      })}
    </Container>
  );
};

export default FavoriteImages;
