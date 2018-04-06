import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import theme from "./config/theme";
import base from "./config/routing";
import Users from "./containers/Users";
import Albums from "./containers/Albums";
import Photos from "./containers/Photos";
import Emoji from "./components/Emoji";

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
    <Router basename={base}>
      <Page>
        <Header>
          <Title>
            <Link to="/">
              <Emoji emoji="🌼" label="photo browser logo" /> photo-browser
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
