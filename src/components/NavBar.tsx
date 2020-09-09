import React from "react";
import { BiHomeAlt } from "react-icons/bi/index";
import { FiUsers } from "react-icons/fi/index";
import { RiPriceTag2Fill } from "react-icons/ri/index";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../stores/rootStore";
import { FaSignInAlt } from "react-icons/fa/index";
import { SiGnuprivacyguard } from "react-icons/si/index";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: -10px 0;
  font-size: 1.4em;

  li {
    margin: 10px 0;

    a {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 720px) {
    flex-direction: row;
    margin: 0;
    font-size: 1.6em;
    width: 100%;
    justify-content: space-evenly;

    li {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding-bottom: 15px;
    }
  }
`;

const Link = styled(RouterLink)`
  position: relative;

  &::before {
    pointer-events: none;
    transition: 0.2s;
    clip-path: polygon(0 50%, 100% 100%, 100% 0);
    background-color: #52a7fa;
    width: 8px;
    height: 10px;
    content: "";
    position: absolute;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }

  &::after {
    pointer-events: none;
    opacity: 0;
    transition: 0.2s;
    content: attr(data-hint);
    position: absolute;
    left: 35px;
    color: #fff;
    padding: 3px 10px;
    background-color: #52a7fa;
    font-size: 0.7em;
    border-radius: 3px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 720px) {
    &::after {
      opacity: 1;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: transparent;
      color: #555;
      font-size: 0.5em;
      font-weight: bolder;
    }

    &::before {
      display: none;
    }
  }
`;

function PrivateButtons() {
  return (
    <React.Fragment>
      <li>
        <Link data-hint="Главная" to="/">
          <BiHomeAlt />
        </Link>
      </li>
      <li>
        <Link data-hint="Клиенты" to="/clients">
          <FiUsers />
        </Link>
      </li>
      <li>
        <Link data-hint="Услуги" to="/services">
          <RiPriceTag2Fill />
        </Link>
      </li>
    </React.Fragment>
  );
}

function PublicButtons() {
  return (
    <React.Fragment>
      <li>
        <Link data-hint="Войти" to="/auth">
          <FaSignInAlt />
        </Link>
      </li>
      <li>
        <Link data-hint="Регистрация" to="/clients">
          <SiGnuprivacyguard />
        </Link>
      </li>
    </React.Fragment>
  );
}

function NavBar() {
  const userStore = useSelector((store: RootStore) => store.userStore);

  return <List>{userStore.isAuth ? <PrivateButtons /> : <PublicButtons />}</List>;
}

export default NavBar;
