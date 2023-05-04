import http from "./base-api";

const create = (booking) =>
  http.post("/bookings", booking).then((res) => res.data);

export default {
  create,
};
