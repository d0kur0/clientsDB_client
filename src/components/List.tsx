import React, { ReactElement } from "react";
import styled from "styled-components";

type ListProps = {
  children: ReactElement[];
};

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0;
    height: 55px;
    font-weight: bolder;
    font-size: 1.1em;
    border-bottom: 1px solid #ddd;
    transition: 0.2s;

    &:hover {
      background-color: #f1f1f1;
    }

    &:last-child {
      border: none;
    }

    a,
    button {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      justify-content: center;
    }
  }

  .red-hint {
    color: #ec6d6d;

    a,
    button {
      color: #ec6d6d;

      &:hover {
        color: #b34848;
      }
    }
  }
`;

function List(props: ListProps) {
  return <ListWrapper>{props.children}</ListWrapper>;
}

export default List;
