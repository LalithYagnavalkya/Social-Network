import { width } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { Loading } from ".";
import { useAuthContext } from "../context/user_context";

export const PostTile = ({ creatorName, image }) => {
  const { isLoading, UserData } = useAuthContext();
  if (isLoading) {
    <Loading />;
  }
  return (
    <Wrapper>
      <img
        class="item"
        tabIndex={0}
        src={image}
        alt=""
        style={{ height: "283px", width: "283px", objectFit: "cover" }}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: green;
  object-fit: cover;
  max-width: 283.33px;
  max-height: 283.33px;
`;
