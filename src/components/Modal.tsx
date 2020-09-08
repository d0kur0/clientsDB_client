import React, { ReactElement, useState } from "react";
import styled from "styled-components";

type ModalProps = {
  initiator: ReactElement;
  children: ReactElement;
  title?: string;
};

const ModalRoot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(146 146 146 / 46%);
  z-index: 5;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const ModalBody = styled.div`
  width: 350px;
  max-width: 100%;
  max-height: 600px;
  margin-bottom: 15px;
  border-radius: 5px;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 0 0 5px 5px;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  padding: 10px 10px;
  color: #3e3e3e;
  font-weight: bolder;
  font-size: 0.9em;
  border-bottom: 1px solid #d0d0d0;
`;

const ModalCloseButton = styled.button`
  margin-top: 15px;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  border: none;
  font: inherit;
  font-weight: bolder;
  font-size: 1.1em;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

function Modal(props: ModalProps) {
  const [isOpen, setOpen] = useState(false as boolean);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <React.Fragment>
      <span onClick={handleOpen}>{props.initiator}</span>

      {isOpen && (
        <ModalRoot>
          <ModalBody>
            {props.title && <ModalTitle>{props.title}</ModalTitle>}
            <ModalContent>{props.children}</ModalContent>
            <ModalCloseButton onClick={handleClose}>Закрыть</ModalCloseButton>
          </ModalBody>
        </ModalRoot>
      )}
    </React.Fragment>
  );
}

export default Modal;
