const mongoose = require("mongoose");

const Meme = require("../models/meme");
const cat = require("./data/Cats");
const fun = require("./data/Entretaiment");
const memeGif = require("./data/Memes");

const seedDatabase = async () => {
  try {
    await Meme.deleteMany({});
    const catDataToSeed = cat.data.map((gif) => {
      return {
        title: gif.title || "No title",
        url: gif.images.original.url,
        tag: "cats",
      };
    });

    await Meme.insertMany(catDataToSeed);

    const funDataToSeed = fun.data.map((gif) => {
      return {
        title: gif.title || "No title",
        url: gif.images.original.url,
        tag: "fun",
      };
    });

    await Meme.insertMany(funDataToSeed);

    const memesDataToSeed = memeGif.data.map((gif) => {
      return {
        title: gif.title || "No title",
        url: gif.images.original.url,
        tag: "memes",
      };
    });

    await Meme.insertMany(memesDataToSeed);

    console.log("Database seeded successfully");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding the database:", err);
    mongoose.disconnect();
  }
};

module.exports = seedDatabase;