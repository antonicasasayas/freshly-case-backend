/* eslint-disable prettier/prettier */
const express = require('express');
const Customer = require('../../models/customer.model');

const router = express.Router();

router.get('/', (req, res) => {
  Customer.find({})
    .then((customer) => res.status(200).json(customer))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
