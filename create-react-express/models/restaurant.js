const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
   img: 
    { data: Buffer, contentType: String }
   ,
  name: { type: String, required: true },
  url: { type: String, required: true },
  address: { type: String, required: true },
 
  rating: 
  
  { type: String, required: true },
  review:{type:String},
  
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
