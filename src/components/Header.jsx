import React from "react";
import styled from "styled-components";

import { BsCamera } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const Header = () => {
  return (
    <Wrapper>
      <BsCamera className="item" />

      <img className="logo" src={process.env.PUBLIC_URL + "/insta.svg"} />
      <AiOutlineMessage className="item" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  border-bottom: 1px solid #cfd0d1;
  width: 100%;
  background-color: white;
  height: 45px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  .logo {
    width: 103px;
  }
  .item {
    height: 23.5px;
    width: 22px;
  }
`;

export default Header;
