import styled from "styled-components";
import { Button } from "./Forms";

export const Root = styled.div`
  max-width: 360px;
  margin: auto;
  margin-top: 65px;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 12px 18px 2px rgba(34, 0, 51, 0.04), 0 6px 22px 4px rgba(7, 48, 114, 0.12),
    0 6px 10px -4px rgba(14, 13, 26, 0.12);
  background-color: #fff;
`;

export const Title = styled.h2`
  color: #20123b;
  font-weight: 500;
  text-align: center;
  margin: 0;
  padding-bottom: 15px;
`;

export const TopLogo = styled.div`
  font-size: 6em;
  color: #38a9ff;
  text-align: center;
  margin-top: -65px;
`;

export const Other = styled.div`
  font-weight: 500;
  margin: 10px 0;
  text-align: center;

  a {
    text-decoration: none;
  }
`;

export const VKButton = styled(Button)`
  background-color: #4a76a8;

  &:hover {
    background-color: #36608d;
  }
`;
