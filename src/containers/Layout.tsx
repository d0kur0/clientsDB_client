import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import PageTitle from "../components/PageTitle";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { RootStore } from "../stores/rootStore";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Gilroy", sans-serif;
    font-size: 0.9em;
    margin: auto;
    background-color: #fff;
    color: #1f1f1f;
    
    --navbar-height: 50px;
    --title-height: 50px;
    --based-padding: 15px;
  }
  
  a, button { 
    color: #269AFF;
    transition: 0.3s;
  }
  
  a:hover, button:hover {
    color: #3d81c2;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #67adff;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #1e73c6;
  }
`;

const RootArea = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: var(--navbar-height) 1fr;
  grid-template-rows: var(--title-height);
  grid-template-areas:
    "navbar title"
    "navbar content";

  @media (max-width: 720px) {
    grid-template-columns: auto;
    grid-template-areas:
      "title"
      "content"
      "navbar";
  }
`;

const NavBarWrapper = styled.header`
  padding: var(--based-padding) 0;
  grid-area: navbar;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.main`
  background-color: #f5f5f5;
  grid-area: content;
  padding: var(--based-padding);
  overflow-y: scroll;
  box-shadow: inset 0 2px 8px #e3e3e3;
`;

const PageTitleWrapper = styled.section`
  grid-area: title;
  padding: 0 var(--based-padding);
  display: flex;
  align-items: center;
`;

export type layoutProps = {
  children: ReactElement;
};

function Layout(props: layoutProps) {
  const userStore = useSelector((store: RootStore) => store.userStore);

  return (
    <Router>
      <RootArea>
        <GlobalStyles />
        <PageTitleWrapper>
          <PageTitle />
        </PageTitleWrapper>
        <ContentWrapper>{props.children}</ContentWrapper>
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
      </RootArea>
    </Router>
  );
}

export default Layout;
