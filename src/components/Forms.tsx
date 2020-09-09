import styled from "styled-components";

export const Form = styled.form`
  button {
    margin: 8px 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 500;
  border: 1px solid #afafaf;
  background-color: #fff;

  &:focus {
    outline-color: dodgerblue;
  }

  &::placeholder {
    font-weight: 500;
    color: #4c4c4c;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #20123b;
  font-size: 1.2em;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #1e80de;
  color: #fff;
  background-color: #3099ff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #2289ea;
  }
`;
