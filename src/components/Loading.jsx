import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <img className="logo" src={process.env.PUBLIC_URL + "/loading.svg"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    background-color: azure;
    margin: auto;
  }
`;

export default Loading;
