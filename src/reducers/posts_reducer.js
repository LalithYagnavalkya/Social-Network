const posts_reducer = (state, action) => {
  if (action.type === "GET_ALL_POSTS") {
    return { ...state, posts: action.payload };
  }
  if (action.type === "CREATE_NEW_POST") {
    return { ...state, newPost: action.payload };
  }
  if (action.type === "DELETE_POST") {
    return { ...state, deletedPost: action.payload };
  }
  if (action.type === "UPDATE_LIKES") {
    console.log(action.payload);
    return { ...state, likedUsers: action.payload };
  }
  if (action.type === "GET_USER_POSTS") {
    console.log("this is called here");
    console.log(state.posts);
    console.log(action.payload);
    const posts = state.posts.filter((post) => {
      return post.creatorID === action.payload;
    });
    console.log(posts);
    return { ...state, userPosts: posts };
  }
};

export default posts_reducer;
