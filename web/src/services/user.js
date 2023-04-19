import http from "./base-api";

const register = (user) => http.post("/users", user).then((res) => res.data);

export default {
  register,
};
