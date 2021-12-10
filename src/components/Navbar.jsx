import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { links } from "../utils/constants";

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        {links.map((link, index) => {
          const path = link.url;
          return (
            <li key={index}>
              <Link className="link" to={`${path}`}>
                {link.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  border-top: 1px solid #cfd0d1;
  height: 45px;
  padding: 0 16px;
  width: 100%;
  bottom: 0;
  z-index: 10;
  background-color: white;
  ul {
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .link {
    display: inline-block;
    text-decoration: "none";
    color: #252525;
    align-items: center;
    .icons {
      height: 500px;
    }
    li {
      display: block;
    }
  }
  a {
    svg {
      height: 25px;
      width: 100px;
    }
  }
`;
export default Navbar;
