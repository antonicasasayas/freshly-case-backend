/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  id_customer: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
