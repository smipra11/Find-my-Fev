const router = require("express").Router();
const RestRoute = require("./restaurantroute");

//  routes
router.use("/restaurant", RestRoute);

module.exports = router;
