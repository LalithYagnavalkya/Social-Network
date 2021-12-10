import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useAuthContext } from "../context/user_context";
import { Loading } from "../components";

const LoginPage = () => {
  const { authUser, authUserData, setIsLoading, isLoading } = useAuthContext();

  const [isDisabled, setIsDisabled] = useState(false);

  const UserAuthenticated = async () => {
    setIsLoading(true);
    const response = await axios
      .get("http://localhost:5000/api/auth/user", { withCredentials: true })
      .catch((err) => console.log("not authenticated " + err));
    console.log(response);
    if (response) {
      setIsLoading(false);
      authUser(true);
      authUserData(response.data);
      console.log(response.data);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    UserAuthenticated();
  }, []);

  const redirectToGoogleAuth = () => {
    setIsDisabled(true);
    let timer;
    const googleLoginURL = "http://localhost:5000/api/auth/google";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );
    if (newWindow) {
      timer = setInterval(async () => {
        if (newWindow.closed) {
          UserAuthenticated();
          setIsDisabled(false);
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <img className="logo" src={process.env.PUBLIC_URL + "/insta.svg"} />
      <button
        className="OAuth"
        onClick={() => redirectToGoogleAuth()}
        disabled={isDisabled}
      >
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="googleLogin"
            />
          </div>
          <p className="btn-text">Login with google</p>
        </div>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: blueviolet; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 3rem;
  .logo {
    width: 40rem;
  }

  .google-btn {
    display: flex;
    flex-direction: row;
    height: 42px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 1px;
  }
  .google-icon-wrapper {
    width: 40px;
    height: 42px;
    border-radius: 1px;
    filter: brightness(90%);
  }
  .google-icon {
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    display: flex;
    justify-content: center;
    margin-top: 11px;
    width: 245px;
    font-size: 16px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
`;

export default LoginPage;
