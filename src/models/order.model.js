/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  id_order: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  id_customer: {
    type: String,
    required: true,
  },
  id_address_delivery: {
    type: String,
    required: true,
  },
  current_state: {
    type: String,
    required: true,
  },
  total_paid: {
    type: String,
    required: true,
  },
  date_add: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
