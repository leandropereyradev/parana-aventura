import http from "./base-api";

const list = () => http.get("/fishes").then((res) => res.data);

const detail = (id) => http.get(`/fishes/${id}`).then((res) => res.data);

export default {
  list,
  detail,
};
