import React, { useState } from "react";

import Left from "./components/Left";
import Middle from "./components/Middle";
import Menu from "./components/Menu";
import Right from "./components/Right";

import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Header>
        <Wrapper>
          <Nav>
            <Left />
            <Middle handleMenuShow={setMenuShow} />
            <Menu menuShow={menuShow} handleMenuShow={setMenuShow} />
            <Right />
          </Nav>
        </Wrapper>
      </Header>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  width: 100%;
  z-index: 100;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default App;
