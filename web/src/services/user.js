import http from "./base-api";

const register = (user) => http.post("/users", user).then((res) => res.data);

const login = (user) => http.post("/login", user).then((res) => res.data);

const detail = (id) => http.get(`/users/${id}`).then((res) => res.data);

const upload = (user, id) =>
  http.patch(`/users/${id}`, user).then((res) => res.data);

export default {
  register,
  login,
  detail,
  upload,
};
