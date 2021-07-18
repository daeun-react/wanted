import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../asset/img/logo.png";

function Left() {
  return (
    <LogoWrpper>
      <Link to="/">
        <img src={logo} alt="wanted logo" />
      </Link>
    </LogoWrpper>
  );
}

const LogoWrpper = styled.div`
  display: block;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Left;
