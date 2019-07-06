const express = require("express");

const PORT = process.env.PORT || 3001;
const routes = require("./routes")
const mongoose = require("mongoose");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/restaurantList");
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
