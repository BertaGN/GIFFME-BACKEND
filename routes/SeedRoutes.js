const express = require("express");
const seedDatabase = require("../seed/gifSeed");
const seedRouter = express.Router();

seedRouter.get("/", seedDatabase);

module.exports = seedRouter;