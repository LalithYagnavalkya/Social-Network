import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { posts } from "../utils/tempdata";
import reducer from "../reducers/posts_reducer";
import {
  GET_POSTS_BEGIN,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
} from "../actions";

const initalState = {
  posts_loading: false,
  posts_error: false,
  posts: [],
};

const PostsContext = React.createContext();

export const PostsProvider = ({ children }) => {
  const [state, disptach] = useReducer(reducer, initalState);

  const fetchPosts = () => {
    disptach({ type: GET_POSTS_BEGIN });
    try {
      // const response = posts;
      const posts_data = posts;
      disptach({ type: GET_POSTS_SUCCESS, payload: posts_data });
    } catch (error) {
      disptach({ type: GET_POSTS_ERROR });
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ ...state }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostsContext);
};
