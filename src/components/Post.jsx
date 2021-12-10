import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { BsThreeDots, BsHeart, BsCursor, BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

const Post = ({ post }) => {
  const [caption, setCaption] = useState(false);

  return (
    <Wrapper>
      <div className="header">
        <div className="details">
          <Avatar alt="Remy Sharp" src={post.userImg} />
          <h5>{post.creatorName}</h5>
        </div>
        <div className="options">
          <BsThreeDots />
        </div>
      </div>
      <div className="image">
        <img src={post.image} alt="" />
      </div>
      <div className="footer">
        <div className="interactions">
          <div className="left">
            <BsHeart className="icon" />
            <FaRegComment className="icon" />
            <BsCursor className="icon" />
          </div>
          <div className="right">
            <BsBookmark className="icon" />
          </div>
        </div>
        <div className="likes">7 likes</div>
        <div className="caption">
          <span>{post.userName}</span> {post.caption}
        </div>
        <div className="comments">
          <span>view all comments</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="addComment">
        <form action="" method="">
          <input type="text" placeholder="Add a comment" />
          <button
            onClick={() => {
              console.log("hello");
            }}
          >
            Post
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #cfd0d1;
  width: 599.47px;
  min-height: 857.47px;
  font-family: "Roboto", sans-serif;
  margin-top: 60px;
  /* font-size: 12px; */

  /* box-shadow: 0px 1px 0px black; */
  box-sizing: border-box;
  .header {
    height: 60px;
    /* width: 600px; */
    border-bottom: 1px solid #cfd0d1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .details {
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* background-color: aqua; */
      /* width: 50%; */
      margin-left: 16px;
      h5 {
        font-weight: 500;
        /* font-size: 13px; */
        font-family: "Roboto", sans-serif;
        margin-left: 8px;
        margin-top: 13px;
      }
    }
    .options {
      /* width: 50%; */
      margin-right: 16px;
      /* background-color: aliceblue; */
    }
  }

  .image {
    img {
      width: 598.47px;
      height: 657.47px;
      overflow: hidden;
      object-fit: cover;
    }
  }
  .footer {
    margin: auto 16px;
    .interactions {
      display: flex;
      justify-content: space-between;
      .icon {
        width: 22px;
        height: 22px;
        margin: 18px auto;
        margin-bottom: 3px;
      }
      .left {
        .icon {
          margin-right: 10px;
        }
      }
    }
    .likes {
      font-weight: 500;
    }
    .caption {
      span {
        font-weight: 500;
      }
    }
  }
  .line {
    border-top: 1px solid #cfd0d1;
  }
  .comments {
    margin-top: 7px;
    color: #949596;
  }
  .comments :hover {
    cursor: pointer;
  }
  .addComment {
    /* border-top: 1px solid #cfd0d1; */
    margin: auto 16px;

    input {
      width: 90%;
      border: none;
      padding: 10px 0;
      outline: none;
    }
    button {
      /* margin: auto 16px; */
      width: 10%;
      border: none;
      background-color: white;
      outline: none;
    }
  }
`;

export default Post;
