import React from "react";
import styled from "styled-components";
import { Downvote, Upvote } from "@styled-icons/boxicons-solid";
import { Zap } from "@styled-icons/octicons";

const RedZap = styled(Zap)`
  color: red;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

const IconStyling = `
  color: #61dafb;
  &: hover {
    color: blue;
    cursor: pointer;
  }
  size: 2rem;
`;

const UpvoteIcon = styled(Upvote)`
  ${IconStyling};
`;

const DownvoteIcon = styled(Downvote)`
  ${IconStyling};
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

  return (
    <div>
      <ButtonsWrapper>
        <UpvoteIcon />
        Vote
        <DownvoteIcon />
      </ButtonsWrapper>
    </div>
  );
};

export default VotingButtons;
