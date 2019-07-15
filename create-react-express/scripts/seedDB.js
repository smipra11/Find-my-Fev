const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/restaurantList"
);

const restaurantSeed = [
  {
    name:  "Grindhouse Burgers",
    url: "https://www.zomato.com/atlanta/grindhouse-burgers-downtown?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
    address: "209 Edgewood Avenue SE, Suite 117/18 30303",
    image: "https://b.zmtcdn.com/data/reviews_photos/568/8746f22d971cc047df54886c15ebb568.jpg?crop=1200%3A1200%3B0%2C0&fit=around%7C200%3A200",
    rating: "4.4",
    
  },
  {
    name:"The Varsity",
    url:"https://www.zomato.com/atlanta/the-varsity-midtown?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
    address:"61 North Avenue NW, Midtown, Atlanta 30308",
    image:"https://b.zmtcdn.com/data/reviews_photos/6c7/54d11a547df91ca3c68f499ad8fcf6c7_1531446673.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    rating:"4.5"

  },
  {
      name:"The Optimist",
      url: "https://www.zomato.com/atlanta/the-optimist-westside?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
      address:"914 Howell Mill Road, Westside 30318",
      image:"https://b.zmtcdn.com/data/res_imagery/16908813_RESTAURANT_771ce2c1ea37dbe9c19ef8019f1e8764.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      rating:"4.5"
  },
  {
      name:"West Egg Cafe",
      url:"https://www.zomato.com/atlanta/west-egg-cafe-westside?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
      address:"1100 Howell Mill Road 30318",
      image:"https://b.zmtcdn.com/data/res_imagery/16895030_RESTAURANT_9521fe14f3c23560c721e7cf649d3744.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      rating:"4.7"
  },
  {
      name:"Yeah! Burger",
      url:"https://www.zomato.com/atlanta/yeah-burger-westside?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
      address:"1168 Howell Mill Road, Suite E 30318",
      image:"https://b.zmtcdn.com/data/res_imagery/16907304_RESTAURANT_9a1adcac352bc3249f0f2e621fa4e41b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      rating:"4.7"
  },
  {
      name:"Poor Calvin's",
      url:"https://www.zomato.com/atlanta/poor-calvins-old-fourth-ward?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
      address:"510 Piedmont Avenue. NE 30308",
      image:"https://b.zmtcdn.com/data/res_imagery/16909232_RESTAURANT_e31c806926c66d159a41205512ae0398.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      rating:"4.5"
  },
  {
      name:"Cuts Steakhouse",
      url:"https://www.zomato.com/atlanta/cuts-steakhouse-downtown?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
      address:"60 Andrew Young International Boulevard NE, Downtown, Atlanta 30303",
      image:"https://b.zmtcdn.com/data/reviews_photos/ae6/285333d1c34e59f6fab102f65132dae6_1497452163.jpg?crop=3024%3A3024%3B0%2C0&fit=around%7C200%3A200",
      rating:"3.9"
  },
  {
      name:"Marlow's Tavern",
      url: "https://www.zomato.com/atlanta/marlows-tavern-midtown?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
      address:"950 West Peachtree Street NW, Atlanta 30309",
      image:"https://b.zmtcdn.com/data/res_imagery/16902720_RESTAURANT_cfb5dd53238a70e1d8a77db7d7b68dae.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      rating:"4.3"
  },
  {
      name:"FIGO Pasta",
      url:"https://www.zomato.com/atlanta/figo-pasta-1-westside?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
      address:"2080 Defoor Avenue, Atlanta 30318",
      image:"https://b.zmtcdn.com/data/reviews_photos/290/7dc56c6d14db6ea14936c12944dac290_1492798955.jpg?crop=2049%3A2049%3B1023%2C0&fit=around%7C200%3A200",
      rating:"4.6"
  },
  {
      name:"Fresh To Order",
      url:"https://www.zomato.com/atlanta/fresh-to-order-midtown?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
      address:"860 Peachtree Street NE, Atlanta 30308",
      image:"https://b.zmtcdn.com/data/res_imagery/16896200_RESTAURANT_a74c5dd81ae456a92ae21450bc0831da.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      rating:"4.1"
  }
  
];

db.Restaurant
  .remove({})
  .then(() => db.Restaurant.collection.insertMany(restaurantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
