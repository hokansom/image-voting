import { useState } from "react";
import styled from "styled-components";
import FavoriteImages from "../FavoriteImages";
import VotingPanel from "../VotingPanel";
import { grey2 } from "../../resources/style-constants.js";

const Page = styled.div`
  background-color: ${grey2};
  text-align: center;
`;

const testImages = [
  {
    id: 0,
    altText: "Image 1",
    count: 1,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 1,
    altText: "Image 2",
    count: 4,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    altText: "Image 3",
    count: 5,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    altText: "Image 4",
    count: 0,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    altText: "Image 5",
    count: 2,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    altText: "Image 6",
    count: 3,
    url:
      "https://images.unsplash.com/photo-1604920702164-f8968b33a3f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

const App = () => {
  const [images, setImages] = useState(testImages);

  return (
    <Page>
      <FavoriteImages {...{ images }} />
      <VotingPanel {...{ images, setImages }} />
    </Page>
  );
};

export default App;
