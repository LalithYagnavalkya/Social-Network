import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { posts } from "../utils/tempdata";
import reducer from "../reducers/posts_reducer";
import { createPost, deletePost, getAllPosts } from "../api/Posts";
import { useAuthContext } from "./user_context";

const initialState = {
  posts: [],
  userPosts: [],
  newPost: {
    title: "",
    message: "",
    tags: "",
    image: "",
    creatorName: "",
    creatorID: "",
  },
  deletedPost: "",
  likedUsers: [],
  isLoading: false,
};

const PostsContext = React.createContext();

export const PostsProvider = ({ children }) => {
  const { setIsLoading } = useAuthContext();
  const { UserData } = useAuthContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = async () => {
    setIsLoading(true);
    const posts = await getAllPosts();
    console.log(UserData?.googleId);
    dispatch({ type: "GET_ALL_POSTS", payload: posts.data });
    if (UserData) {
      dispatch({ type: "GET_USER_POSTS", payload: UserData?.googleId });
    }
    setIsLoading(false);
  };

  // const getUserPosts = (id) => {

  // };
  const createNewPost = async (post) => {
    await createPost(post);
    dispatch({ type: "CREATE_NEW_POST", payload: post });
  };
  const removePost = async (id) => {
    const post = await deletePost(id);
    dispatch({ type: "DELETE_POST", payload: post });
  };

  useEffect(() => {
    getPosts();
  }, [state.newPost, state.deletedPost, UserData]);

  return (
    <PostsContext.Provider
      value={{ ...state, getPosts, createNewPost, removePost }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostsContext);
};
