import React from "react";
import styled from "styled-components";

type UserAvatarProps = {
  imageSrc: string;
};

const Avatar = styled.img`
  max-width: 100%;
  width: 28px;
  height: 28px;
`;

function UserAvatar({ imageSrc }: UserAvatarProps) {
  return <Avatar src={imageSrc} />;
}

export default UserAvatar;
