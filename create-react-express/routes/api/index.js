const router = require("express").Router();
const RestRoute = require("./restaurantroute");

// Book routes
router.use("/restaurant", RestRoute);

module.exports = router;
