const router = require("express").Router();
const RestaurantController = require("../../controllers/controllers");

// Matches with "/api/books"
router.route("/")
  .get(RestaurantController.findAll)
  .post(RestaurantController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(RestaurantController.findById)
  .put(RestaurantController.update)
  .delete(RestaurantController.remove);

module.exports = router;
