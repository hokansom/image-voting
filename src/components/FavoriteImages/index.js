import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "../ThumbnailImage";
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

  height: 30vh;
  z-index: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const ImagesWrapper = styled.div`
  width: calc(100% - 25vw);
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  width: 22.5vw;
  height: 100%;
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
              <h3>{`# ${index + 1}`}</h3>
              <Image {...{ image }} />
              <h4>{`Votes: ${image.count}`}</h4>
            </ImageContainer>
          );
        })}
      </ImagesWrapper>
    </Container>
  );
};

export default FavoriteImages;
