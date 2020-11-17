import { useState } from "react";
import styled from "styled-components";
import FavoriteImages from "../FavoriteImages";
import VotingPanel from "../VotingPanel";
import ThemeContext from "../ThemeContext";

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
    <ThemeContext.Provider value={theme}>
      <Page color={theme.grey2}>
        <FavoriteImages {...{ images }} />
        <VotingPanel {...{ images, setImages }} />
      </Page>
    </ThemeContext.Provider>
  );
};

export default App;
