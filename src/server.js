const express = require("express");
const mongoose = require("mongoose");
const appConfig = require("./config/config.js");
const productRouter = require('./router/productRouter.js');
const bodyParser = require('body-parser');

//connect mongodb
async function connetMongoDB() {
  try {
    await mongoose.connect(appConfig.MONGODB_URL);
    console.log("Database connection is successful!");
  } catch (error) {
    console.log("Failed to connet the database");
  }
}

function initServer() {
  const app = express();
  app.listen(appConfig.PORT);
  connetMongoDB();

  // middlewares
  app.use(express.json());
  app.use(bodyParser.json());
  //route middlewares
  app.get("/", (req, res) => {
    res.send("Server is alive");
  });

  app.use("/api", productRouter);
}

initServer();
