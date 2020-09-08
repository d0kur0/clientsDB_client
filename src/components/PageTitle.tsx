import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootStore } from "../stores/rootStore";
import { FaSlackHash } from "react-icons/fa/index";
import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import Modal from "./Modal";
import List from "./List";

const TitleRoot = styled.div`
  user-select: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TitleLeft = styled.div`
  display: flex;
  align-items: center;
  color: #0094ff;
  font-size: 1.2em;

  & > svg {
    padding-right: 5px;
  }
`;

const TitleRight = styled.div``;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font: inherit;
`;

function PageTitle() {
  const titleStore = useSelector((store: RootStore) => store.titleStore);
  const userStore = useSelector((store: RootStore) => store.userStore);

  return (
    <React.Fragment>
      <TitleRoot>
        <span />
        <TitleLeft>
          <FaSlackHash />
          {titleStore}
        </TitleLeft>
        {userStore.isAuth ? (
          <TitleRight>
            <Modal
              initiator={
                <Button>
                  <UserAvatar imageSrc="https://avatars0.githubusercontent.com/u/31435565?s=460&u=6e489d645e933f2452540329dc372e44a93da716&v=4" />
                </Button>
              }
              title="Меню пользователя">
              <List>
                <li>
                  <Link to="/test">Настройки</Link>
                </li>
                <li className="red-hint">
                  <Link to="/test">Выйти</Link>
                </li>
              </List>
            </Modal>
          </TitleRight>
        ) : (
          <span />
        )}
      </TitleRoot>
    </React.Fragment>
  );
}

export default PageTitle;
