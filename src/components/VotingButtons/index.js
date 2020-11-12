import React from "react";
import styled from "styled-components";
import { Downvote, Upvote } from "@styled-icons/boxicons-solid";
import { grey, lightBlue, midBlue } from "../../resources/style-constants.js";

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

const IconStyling = `
  color: ${lightBlue};
  transition: color 0.5s ease;
  &: hover {
    color: ${midBlue};
    cursor: pointer;
  }
`;

const UpvoteIcon = styled(Upvote)`
  ${IconStyling};
`;

const DownvoteIcon = styled(Downvote)`
  ${IconStyling};
`;

const iconSize = 44;

const VotingButtons = ({ updateCount }) => {
  const upVote = (event) => {
    event.preventDefault();
    // updateCount();
  };

  const downVote = (event) => {
    event.preventDefault();
    // updateCount();
  };

  return (
    <div>
      <ButtonsWrapper>
        <UpvoteIcon onClick={upVote} size={iconSize} />
        <p> Vote</p>
        <DownvoteIcon onClick={downVote} size={iconSize} />
      </ButtonsWrapper>
    </div>
  );
};

export default VotingButtons;
