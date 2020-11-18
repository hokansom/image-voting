import { useState } from "react";
import styled from "styled-components";
import FavoriteImages from "../FavoriteImages";
import VotingPanel from "../VotingPanel";
import ThemeContext from "../ThemeContext";
import testImages from "../../images";
import Button from "../Button";

const theme = {
  grey: "#f7f9fb",
  grey2: "#ECEFF1",
  lightBlue: "#8fc1e3",
  midBlue: "#5085a5",
  darkBlue: "#317083",
  accentGreen: "#687864"
};

const Page = styled.div`
  text-align: center;
`;

const App = () => {
  const images = [...testImages];
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 6));

  const hasMore = visibleImages.length < images.length;

  const showMore = (event) => {
    event.preventDefault();
    if (visibleImages.length < images.length) {
      let updatedImages = [...visibleImages];
      const length = visibleImages.length;
      let endIndex = length + 6;
      endIndex = endIndex > images.length ? images.length : endIndex;
      updatedImages = updatedImages.concat(images.slice(length, endIndex));
      setVisibleImages(updatedImages);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Page color={theme.grey2}>
        <FavoriteImages images={visibleImages} />
        <VotingPanel images={visibleImages} setImages={setVisibleImages} />
        {hasMore && <Button onClick={showMore}>Show More</Button>}
      </Page>
    </ThemeContext.Provider>
  );
};

export default App;
