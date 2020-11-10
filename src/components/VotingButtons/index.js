import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

const PaddedIcon = styled.div`
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const VotingButtons = ({ updateCount }) => {
  const upVote = (event) => {
    event.preventDefault();
    // updateCount();
  };

  const downVote = (event) => {
    event.preventDefault();
    // updateCount();
  };

  const iconStyle = { color: "61DAFB", size: "2rem" };

  return (
    <ButtonsWrapper>
      <IconContext.Provider value={iconStyle}>
        <PaddedIcon onClick={upVote}>
          <AiFillLike />
        </PaddedIcon>
        <PaddedIcon onClick={downVote}>
          <AiFillDislike />
        </PaddedIcon>
      </IconContext.Provider>
    </ButtonsWrapper>
  );
};

export default VotingButtons;
