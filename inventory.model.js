const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  category: String
});

module.exports = mongoose.model("Inventory", InventorySchema);
