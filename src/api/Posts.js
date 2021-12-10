import baseUrl from "./baseUrl";

const getAllPosts = async () => {
  return await baseUrl.get("/posts");
};

const createPost = async (post) => {
  return await baseUrl.post("/create", post);
};

const deletePost = async (id) => {
  return await baseUrl.delete(`/delete/${id}`);
};

const findUser = async (id) => {
  return await baseUrl.post("/finduser", id);
};

// const updateLikes = async (postId, users) => {
//   return await baseUrl.post(`/like/${postId}`, users);
// };

export { getAllPosts, createPost, deletePost, findUser };
