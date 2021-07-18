import React from "react";
import styled from "styled-components";

function UserImage({ active = false, size }) {
  return (
    <UserImageWrpper active={active} size={size}>
      <div className="image" />
    </UserImageWrpper>
  );
}

const UserImageWrpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size || 32}px;
  height: ${({ size }) => size || 32}px;
  background-color: #fff;
  border: 1px solid ${({ active }) => (active ? "#36f" : "#e1e2e3")};
  border-radius: 50%;
  overflow: hidden;

  .image {
    background-image: url(https://static.wanted.co.kr/images/avatars/1846564/afe3d22e.jpg),
      url(https://static.wanted.co.kr/images/profile_default.png);
    width: ${({ size }) => size || 28}px;
    height: ${({ size }) => size || 28}px;
    border-radius: 50%;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default UserImage;
