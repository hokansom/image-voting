import styled from "styled-components";
import Image from "../Image";
import VotingButtons from "../VotingButtons";
import { grey2, darkBlue } from "../../resources/style-constants.js";

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${grey2};
`;

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  width: 25vw;
  height: 30vh;
  justify-content: center;
  color: ${darkBlue};
`;

const VotingPanel = ({ images, setImages }) => {
  const updateCount = (image, increaseCount) => {
    let updatedImages = [...images];
    let imageIndex = updatedImages.findIndex((img) => img.id === image.id);
    if (increaseCount) {
      updatedImages[imageIndex].count += 1;
    } else {
      updatedImages[imageIndex].count =
        updatedImages[imageIndex].count > 1
          ? updatedImages[imageIndex].count - 1
          : 0;
    }
    setImages(updatedImages);
  };

  return (
    <Grid>
      {images.map((image, index) => {
        return (
          <Entry key={index}>
            <VotingButtons {...{ image, updateCount }} />
            <Image {...{ image }} />
          </Entry>
        );
      })}
    </Grid>
  );
};

export default VotingPanel;
