/* eslint-disable prettier/prettier */
const express = require('express');
const Order = require('../../models/order.model');

const router = express.Router();

router.get('/', (req, res) => {
  Order.find({})
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
