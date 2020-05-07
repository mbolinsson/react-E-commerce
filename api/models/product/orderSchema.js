const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String},
  quantity: {type: Number},
  ordernumber: {type: Number},
  userId: {type: String},
  image: {type: String},
  orderActive: {type: Boolean},
});

module.exports = mongoose.model("Order", orderSchema);
