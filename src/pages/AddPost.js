import React, { useRef, useState } from "react";
import styled from "styled-components";

import { useAuthContext } from "../context/user_context";
import { usePostContext } from "../context/posts_context";
import { Navigate } from "react-router";
const AddPost = () => {
  const { createNewPost } = usePostContext();
  const { UserData } = useAuthContext();
  const ref = useRef();
  const [currentImage, setCurrImage] = useState(null);
  const [postInfo, setPostInfo] = useState({
    message: "",
    image: "",
    userImg: UserData?.avatar,
    creatorName: UserData?.fullName,
    creatorID: UserData?.googleId,
  });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setCurrImage(base64);
    setPostInfo((prevState) => ({ ...prevState, image: base64 }));
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const reset = () => {
    if (ref.current.value) {
      ref.current.value = null;
    }
    setCurrImage(null);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPostInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewPost(postInfo);
    reset();
    setPostInfo({
      message: "",
      image: "",
      creatorName: UserData?.fullName,
      creatorID: UserData?.googleId,
    });
    // window.location.href = "/";

    return;
  };

  const handleClear = (e) => {
    e.preventDefault();
    reset();
    setPostInfo({
      message: "",
      image: "",
      creatorName: UserData?.fullName,
      creatorID: UserData?.googleId,
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <h2>upload a post</h2>
        <div className="details">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="message">caption</label>
              <textarea
                name="message"
                id=""
                rows="6"
                cols="55"
                placeholder="Whats on your mind?"
                value={postInfo.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <input type="file" name="image" ref={ref} onChange={uploadImage} />

            {currentImage !== null ? (
              <img
                src={currentImage}
                alt=""
                style={{
                  maxHeight: "400px",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              />
            ) : null}

            <div className="buttons">
              <button className="submit" type="submit">
                Post
              </button>
              <button className="clear" onClick={handleClear}>
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  margin-top: 45px;
  margin-bottom: 45px;
  display: flex;
  justify-content: center;
  .container {
    width: 60%;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;

    button {
      background-color: white;
      font-size: 1rem;
      line-height: 1.8;
      border: 0.1rem solid #dbdbdb;
      border-radius: 0.3rem;
      padding: 0 2.4rem;
      margin-left: 2rem;
    }

    form {
      /* background-color: aqua; */
      display: flex;
      flex-direction: column;
      row-gap: 1rem;

      input {
        margin: 0 auto;
      }
      .input {
        display: flex;
        align-items: center;
        column-gap: 3rem;
        justify-content: center;
        label {
          font-weight: 500;
          font-size: 2rem;
        }
        textarea {
          padding: 1rem;
        }
      }

      .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default AddPost;
