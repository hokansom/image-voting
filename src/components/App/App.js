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
    altText: "Testing 123",
    count: 1,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    altText: "Testing 123",
    count: 4,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    altText: "Testing 123",
    count: 5,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    altText: "Testing 123",
    count: 0,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    altText: "Testing 123",
    count: 2,
    url:
      "https://images.unsplash.com/photo-1604864425517-a45eb10b6fe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    altText: "Testing 123",
    count: 3,
    url:
      "https://images.unsplash.com/photo-1604920702164-f8968b33a3f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

function App() {
  return (
    <Page>
      <FavoriteImages images={testImages} />
      <VotingPanel images={testImages} />
    </Page>
  );
}

export default App;
