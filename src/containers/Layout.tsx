import React, { ReactElement, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import NavBar from "../components/NavBar";
import { useWindowSize } from "@react-hook/window-size";

const RootArea = styled.div`
  display: grid;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  grid-template-columns: var(--navbar-height) 1fr;
  grid-template-rows: var(--title-height);
  grid-template-areas:
    "navbar title"
    "navbar content";

  @media (max-width: 720px) {
    grid-template-columns: auto;
    grid-template-rows: var(--title-height) 1fr var(--navbar-height);
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
  const [width, height] = useWindowSize();

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [width, height]);

  return (
    <Router>
      <RootArea>
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
