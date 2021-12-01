import {
  GET_POSTS_BEGIN,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
} from "../actions";

const posts_reducer = (state, action) => {
  if (action.type === GET_POSTS_BEGIN) {
    return { ...state, posts_loading: true };
  }
  if (action.type === GET_POSTS_SUCCESS) {
    return { ...state, posts: action.payload };
  }
  if (action.type === GET_POSTS_ERROR) {
    return { ...state, posts_error: true };
  }
};

export default posts_reducer;
