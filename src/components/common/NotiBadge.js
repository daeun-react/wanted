import React from "react";
import styled from "styled-components";

function NotiBadge({ newNoti }) {
  return <>{newNoti && <Badge>N</Badge>}</>;
}
const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgb(51, 102, 255);
  border-radius: 30%;
  color: #fff;
  width: 13px;
  height: 13px;
  font-size: 0.5rem;
`;
export default NotiBadge;
