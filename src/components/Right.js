import React, { useState } from "react";
import styled, { css } from "styled-components";

import { VscBell } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/all";
import { GiHamburgerMenu } from "react-icons/gi";

import DropDownMenu from "./common/DropDownMenu";
import UserImage from "./common/UserImage";
import NotiBadge from "./common/NotiBadge";

function Right() {
  const [active, setActive] = useState("");
  const [newNoti, setNewNoti] = useState(true);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  const handleActive = (value) => {
    setActive(value);
  };

  const handleToggle = () => {
    setHamburgerToggle((value) => !value);
  };

  return (
    <>
      <Aside>
        <UL>
          <LI item="search">
            <Button
              active={active === "search"}
              onClick={() => handleActive("search")}
            >
              <IoSearchOutline />
            </Button>
          </LI>
          <LI item="bell">
            <Button
              active={active === "bell"}
              onClick={() => {
                handleActive("bell");
                setNewNoti();
              }}
            >
              <VscBell />
              <NotiBadge newNoti={newNoti} />
            </Button>
          </LI>
          <LI item="hamburger">
            <Button
              active={false}
              onClick={() => {
                handleActive("hamburger");
                handleToggle();
              }}
            >
              <GiHamburgerMenu />
            </Button>
          </LI>
          <LI item="userImage">
            <Button
              active={active === "userImage"}
              onClick={() => handleActive("userImage")}
            >
              <UserImage active={active === "userImage"} />
              <NotiBadge newNoti={newNoti} />
            </Button>
          </LI>
          <LI item="service" className="division">
            <DashBoardButton>기업 서비스</DashBoardButton>
          </LI>
        </UL>
      </Aside>

      <DropDownMenu
        newNoti={newNoti}
        toggle={hamburgerToggle}
        handleToggle={handleToggle}
      />
    </>
  );
}

const Aside = styled.aside`
  display: block;
  padding: 9px 0;
  height: 100%;
`;

const UL = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LI = styled.li`
  height: 100%;
  padding: 0 10px;
  display: inline-block;

  ${({ item }) => item === "hamburger" && `display:none`};
  ${({ item }) =>
    item === "service" &&
    css`
      display: inline-box;
      &:before {
        content: "";
        display: block;
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        margin: auto 10px;
      }
    `};

  @media (max-width: 768px) {
    ${({ item }) => item === "hamburger" && `display:inline-block`};
    ${({ item }) =>
      (item === "userImage" || item === "service") && `display:none`};
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    overflow: hidden;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #36f;
      color: #fff;
    `}
`;

const DashBoardButton = styled.button`
  height: 30px;
  margin: 0 0 0 15px;
  padding: 0 10px;
  background: none;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
`;

export default Right;
