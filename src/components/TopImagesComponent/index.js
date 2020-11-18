import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "./ThumbnailImage";
import ThemeContext from "../ThemeContext";

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${({ borderColor }) => borderColor};
  width: 100%;
  height: 25vh;
  z-index: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const ImagesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  width: 20vw;
  height: 100%;
`;

const H4 = styled.h4`
  margin: 8px;
`;

const FavoriteImages = ({ images }) => {
  const [topImages, setTopImages] = useState([]);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    let sortedImages = images.slice();
    sortedImages.sort((a, b) => b.count - a.count);
    setTopImages(sortedImages.slice(0, 3));
  }, [images]);

  return (
    <Container borderColor={theme.midBlue} backgroundColor={theme.lightBlue}>
      <ImagesWrapper>
        {topImages.map((image, index) => {
          return (
            <ImageContainer key={index}>
              <H4>{`# ${index + 1}`}</H4>
              <Image {...{ image }} />
              <H4>{`Votes: ${image.count}`}</H4>
            </ImageContainer>
          );
        })}
      </ImagesWrapper>
    </Container>
  );
};

export default FavoriteImages;
