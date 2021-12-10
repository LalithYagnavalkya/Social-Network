const userReducer = (state, action) => {
  if (action.type === "IS_USER_AUTH") {
    return { ...state, isUserAuthenticated: action.payload };
  }
  if (action.type === "AUTH_USER_DATA") {
    return { ...state, UserData: action.payload };
  }
  if (action.type === "SET_IS_LOADING") {
    return { ...state, isLoading: action.payload };
  }
};

export default userReducer;
