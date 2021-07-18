import React from "react";
import data from "../asset/data.json";
import styled, { css } from "styled-components";
import MenuItem from "./MenuItem";

function Menu({ menuShow, handleMenuShow }) {
  return (
    <OverlayWrapper menuShow={menuShow}>
      <Overlay
        onMouseLeave={() => {
          handleMenuShow(false);
        }}
      >
        <Container>
          {data.menu.map((item) => (
            <MenuItem key={item.tag.id} content={item.tag} sideMenu={false} />
          ))}
          <MenuItem content={data.sideMenu} sideMenu={true} />
        </Container>
      </Overlay>
    </OverlayWrapper>
  );
}

const OverlayWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0%;
  opacity: 0;
  overflow: hidden;
  transition: 0.5s;

  ${(props) =>
    props.menuShow &&
    css`
      display: block;
      height: 100%;
      opacity: 1;
    `}

  @media (max-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: relative;
  max-height: 375px;
  height: 100%;
  background-color: #fff;
  transition: 0.5s;

  &::before {
    height: 0%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: 1060px;
  margin: 0 auto;
  padding: 0;
`;

export default Menu;
