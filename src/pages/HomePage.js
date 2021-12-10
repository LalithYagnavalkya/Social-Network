import React from "react";
import styled from "styled-components";
import { Post } from "../components";
import { usePostContext } from "../context/posts_context";

const HomePage = () => {
  const { posts } = usePostContext();
  const revserd = [...posts].reverse();

  return (
    <Wrapper>
      {revserd.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;
`;

export default HomePage;
