const Booking = require("../models/booking.model");

module.exports.create = (req, res, next) => {
  Booking.create({
    user: req.user.id,
    lodging: req.body.lodging,
    checkin: req.body.date.from,
    checkout: req.body.date.to,
    people: req.body.people,
    nights: req.body.date.nights,
    aditionals: req.body.aditionals,
    total_price: req.body.total_price,
  })
    .then((lodgings) => res.json(lodgings))
    .catch(next);
};
