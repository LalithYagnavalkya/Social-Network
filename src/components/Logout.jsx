import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/user_context";

const Logout = () => {
  const { authUser, setIsLoading } = useAuthContext();
  const logoutUserr = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:5000/api/logout", { withCredentials: true })
      .then(() => {
        authUser(false);
        setIsLoading(false);
      });
  };
  return (
    <Wrapper>
      <button onClick={logoutUserr}>Logout</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    background-color: white;
    font-size: 1rem;
    line-height: 1.8;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.3rem;
    padding: 0 2.4rem;
    margin-left: 2rem;
  }
`;

export default Logout;
