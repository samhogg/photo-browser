import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import theme from "./config/theme";
import Users from "./containers/Users";
import Albums from "./containers/Albums";
import Photos from "./containers/Photos";

const Page = styled.div``;

const Wrapper = styled.div`
  margin: 32px auto;
  width: 960px;
  max-width: 90%;
`;

const Header = styled.header`
  border-bottom: 1px solid #ccc;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 32px 0;
`;

const Title = styled.h1`
  display: block;
  margin: 0 auto;
  width: 960px;
  max-width: 90%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Page>
        <Header>
          <Title>
            <Link to="/">
              <span role="img" aria-label="flower icon">
                🌼
              </span>{" "}
              photo-browser
            </Link>
          </Title>
        </Header>
        <Wrapper>
          <Route
            exact
            path="/users/:userId/albums/:albumId"
            component={Photos}
          />
          <Route exact path="/users/:userId" component={Albums} />
          <Route exact path="/" component={Users} />
        </Wrapper>
      </Page>
    </Router>
  </ThemeProvider>
);

export default App;