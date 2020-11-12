import styled from "styled-components";
import Image from "../Image";
import VotingButtons from "../VotingButtons";
import {
  grey,
  grey2,
  lightBlue,
  midBlue,
  darkBlue
} from "../../resources/style-constants.js";

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

const VotingPanel = ({ images }) => {
  return (
    <Grid>
      {images.map((image, index) => {
        return (
          <Entry key={index}>
            <VotingButtons />
            <Image {...{ image }} />
          </Entry>
        );
      })}
    </Grid>
  );
};

export default VotingPanel;
