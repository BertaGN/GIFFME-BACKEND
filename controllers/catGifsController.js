require("dotenv").config();

const CatGifs = require('../models/meme');



const getAllCatMemes = async (req, res) => {
  try {
    const catGif = await CatGifs.find({tag: "cats"}).sort({ createdAt: -1 });
    res.json({ok:true, catGif});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


const createCatMeme = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    const catgif = new CatGifs({ title, imageUrl });
    await catgif.save();
    res.json(catgif);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteCatMeme = async (req, res) => {
  try {
    const { id } = req.params;
    await CatGifs.findByIdAndDelete(id);
    res.json({ message: 'Cat Gif deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getAllCatMemes,
  createCatMeme,
  deleteCatMeme
}