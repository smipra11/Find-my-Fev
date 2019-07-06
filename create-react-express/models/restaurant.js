const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  address: { type: String, required: true },
  image:{ type: String, required: true },
  rating:{ type: String, required: true },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
