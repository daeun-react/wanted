import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function Middle({ handleMenuShow }) {
  const { pathname } = useLocation(); // active 정보 확인

  const list = [
    { id: "0", title: "홈", link: "/wanted/" },
    { id: "1", title: "탐색", link: "/wanted/wdlist" },
    { id: "2", title: "커리어 성장", link: "/wanted/events" },
    { id: "3", title: "직군별 연봉", link: "/wanted/salary" },
    { id: "4", title: "이력서", link: "/wanted/cv" },
    { id: "5", title: "매치업", link: "/wanted/profile" },
    { id: "6", title: "프리랜서", link: "/wanted/experts" },
    { id: "7", title: "Ai 합격예측", link: "/wanted/aiscore" },
  ];

  const handleMenu = (index) => {
    index === 1 ? handleMenuShow(true) : handleMenuShow(false);
  };

  return (
    <UL>
      {list.map((item, i) => (
        <LI
          key={item.id}
          id={item.id}
          selected={item.link === pathname}
          onMouseEnter={() => handleMenu(i)}
          onMouseLeave={() => handleMenu(i)}
        >
          <Link to={`${item.link}`}>
            {item.title}
            {list.length - 1 === i && <sup>Beta</sup>}
          </Link>
        </LI>
      ))}
    </UL>
  );
}

const UL = styled.ul`
  display: flex;

  a {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    color: #333;
  }

  sup {
    position: absolute;
    color: #258bf7;
    right: -7px;
    top: 8px;
    font-size: 8px;
  }
`;

const LI = styled.li`
  display: inline-block;
  height: inherit;

  ${({ selected }) => selected && `box-shadow: inset 0 -2px #258bf7;`}
  ${({ id }) => Number(id) === 0 && `display: none;`}

  &:hover {
    box-shadow: inset 0 -2px #ddd;
  }

  @media (max-width: 768px) {
    ${({ id }) =>
      Number(id) < 3 ? `display: inline-block;` : `display: none;`};
  }
`;

export default Middle;
