import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import styled, { css } from "styled-components";
import Symbol from "../../asset/img/symbol.png";
import UserImage from "./UserImage";

function DropDownMenu({ newNoti, toggle, handleToggle }) {
  const list = [
    { id: "0", title: "MY 원티드", borderTop: false },
    { id: "1", title: "프로필", borderTop: false },
    { id: "2", title: "이력서", borderTop: true },
    { id: "3", title: "매치업", borderTop: false },
    { id: "4", title: "추천", borderTop: false },
    { id: "5", title: "지원 현황", borderTop: false },
    { id: "6", title: "프리랜서", borderTop: false },
    { id: "7", title: "직군별 연봉", borderTop: true },
    { id: "8", title: "커리어 성장", borderTop: false },
    { id: "9", title: "기업 서비스", borderTop: true },
    { id: "10", title: "로그아웃", borderTop: false },
  ];

  return (
    <DropDownWrapper toggle={toggle}>
      <Container>
        <Header>
          <img src={Symbol} alt="symbol" />
          <div onClick={handleToggle}>
            <AiOutlineClose />
          </div>
        </Header>
        <UL>
          {list.map((item) => (
            <LI key={item.id} borderTop={item.borderTop}>
              <Link to="/">
                {item.id === "0" ? (
                  <>
                    {newNoti ? <Badge>{item.title}</Badge> : item.title}
                    <UserImage size={44} />
                  </>
                ) : (
                  item.title
                )}
              </Link>
            </LI>
          ))}
        </UL>
      </Container>
    </DropDownWrapper>
  );
}

const DropDownWrapper = styled.div`
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin-top: 0;
  transform: none;
  z-index: 100;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  border-radius: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;

  img {
    display: inline-block;
    margin: 13px 0;
    padding: 0;
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 24px;
    line-height: 1;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #999;
  }
`;

const UL = styled.ul`
  margin: 45px 0 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    padding: 15px 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
  }
`;

const LI = styled.li`
  width: 100%;
  height: auto;

  ${({ borderTop }) =>
    borderTop &&
    css`
      padding-top: 15px;
      margin-top: 15px;
      border-top: 1px solid #eee;
    `}
`;

const Badge = styled.span`
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    right: -10px;
    width: 5px;
    height: 5px;
    background: #36f;
    border-radius: 50%;
  }
`;

export default DropDownMenu;
