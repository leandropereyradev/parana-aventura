import http from "./base-api";

const list = () => http.get("/fishing-zones").then((res) => res.data);

const login = (user) => http.post("/login", user).then((res) => res.data);

const detail = (id) => http.get(`/users/${id}`).then((res) => res.data);

const upload = (user, id) =>
  http.patch(`/users/${id}`, user).then((res) => res.data);

export default {
  list,
  login,
  detail,
  upload,
};
