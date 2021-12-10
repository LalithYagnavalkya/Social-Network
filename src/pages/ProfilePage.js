import React, { useEffect } from "react";
import styled from "styled-components";
import { Loading, Logout } from "../components";
import Avatar from "@mui/material/Avatar";
import { useAuthContext } from "../context/user_context";
import { usePostContext } from "../context/posts_context";
import { PostTile } from "../components/PostTile";

const ProfilePage = () => {
  const { userPosts, getPosts } = usePostContext();

  const { isLoading, UserData } = useAuthContext();

  useEffect(() => {
    // getUserPosts(UserData?.googleId);
    console.log("profile page");
    getPosts();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="profile">
        <div className="information">
          <div className="propic">
            <Avatar
              sx={{ width: 155, height: 155 }}
              alt={UserData?.fullName}
              src={UserData.avatar}
            />
          </div>
          <div className="details">
            <div className="top">
              <span>
                <h2>{UserData?.fullName}</h2>
              </span>
              <Logout />
            </div>
            <div className="middle">
              <ul>
                <li>
                  <span class="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span class="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span class="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>
            <div className="caption">
              <span>{UserData?.givenName}</span>
              {/* <br />
              add a bio */}
            </div>
          </div>
        </div>
        <div className="tofit">
          <div className="container">
            {userPosts.map((post, index) => {
              return <PostTile {...post} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 45px;
  margin-bottom: 45px;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  overflow-y: scroll;
  .profile {
    height: 100%;
    width: 75%;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5rem;
    .information {
      display: flex;
      flex-direction: row;
      column-gap: 4rem;
      margin-top: 4rem;
      height: 9.376rem;
      .propic .Avatar {
        /* width: 9.376rem; */
      }

      .details {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        .top {
          display: flex;
          flex-direction: row;
          column-gap: 2rem;
          align-items: center;
          h2 {
            font-weight: 200;
          }
        }
        .middle ul {
          display: flex;
          flex-direction: row;
          column-gap: 1rem;
          li {
            span {
              margin-right: 0.1rem;
              font-weight: 500;
            }
          }
        }
        .caption {
          span {
            font-weight: 500;
          }
        }
      }
    }
    
    .tofit{
      height: fit-content;
      
      display:flex;
      justify-content: center;
      padding-top: 2rem; 
      border-top: 1px solid #cfd0d1;
    }
    .container {
      height: fit-content;
      width: 100%;
      row-gap: 1.5rem;
      column-gap: 1rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(100px, auto);
      text-align: center;
}
   
    }
  }
`;

export default ProfilePage;
