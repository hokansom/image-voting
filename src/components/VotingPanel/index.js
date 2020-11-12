import React from "react";
import styled from "styled-components";
import Image from "../Image";
import VotingButtons from "../VotingButtons";

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Entry = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  width: 25vw;
  height: 30vh;
  border: 1px solid green;
  justify-content: center;
`;

const VotingPanel = ({ images }) => {
  return (
    <Grid>
      {images.map((image) => {
        return (
          <Entry>
            <VotingButtons />
            <Image {...{ image }} />
          </Entry>
        );
      })}
    </Grid>
  );
};

export default VotingPanel;
