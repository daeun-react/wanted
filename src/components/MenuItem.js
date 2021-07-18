import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

function MenuItem({ content, sideMenu = false }) {
  const renderList = (tags) => {
    return tags.slice(0, 7).map((list) => (
      <Link key={list.id} to="/">
        <H3>{list.title}</H3>
      </Link>
    ));
  };

  if (sideMenu) {
    return (
      <MenuItemWrapper>
        {content.map((list) => (
          <Link key={list.id} to="/">
            <H2>
              {list.title}
              <RiArrowRightSLine />
            </H2>
          </Link>
        ))}
      </MenuItemWrapper>
    );
  }

  return (
    <MenuItemWrapper>
      <Link to="/">
        <H2>
          {content.title.length > 5
            ? content.title.substring(0, 5).concat("...")
            : content.title}
          <RiArrowRightSLine />
        </H2>
      </Link>
      {renderList(content.tags)}
      <Link to="/">
        <H3>
          더보기
          <RiArrowRightSLine />
        </H3>
      </Link>
    </MenuItemWrapper>
  );
}

const MenuItemWrapper = styled.div`
  height: 270px;
  padding: 40px 20px 0 0;
  text-align: left;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    color: #999;
    font-size: 20px;
  }
`;

const H2 = styled.h2`
  position: relative;
  font-size: 17px;
  color: #333;
  line-height: 20px;
  vertical-align: top;
  padding-right: 20px;
  padding-bottom: 15px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const H3 = styled.h3`
  position: relative;
  font-size: 13px;
  color: #999;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 5px 20px 5px 0;
`;

export default MenuItem;
