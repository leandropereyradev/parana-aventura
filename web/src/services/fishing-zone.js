import http from "./base-api";

const list = () => http.get("/fishing-zones").then((res) => res.data);

const detail = (id) => http.get(`/fishing-zones/${id}`).then((res) => res.data);

export default {
  list,
  detail,
};
