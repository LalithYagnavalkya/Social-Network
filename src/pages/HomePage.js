import React from "react";
import styled from "styled-components";
import { Post } from "../components";
import { usePostContext } from "../context/posts_context";

const HomePage = () => {
  const { posts } = usePostContext();
  return (
    <Wrapper>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomePage;
