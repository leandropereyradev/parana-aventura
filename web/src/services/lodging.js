import http from "./base-api";

const list = () => http.get("/lodgings").then((res) => res.data);

const detail = (id) => http.get(`/lodgings/${id}`).then((res) => res.data);

export default {
  list,
  detail,
};
