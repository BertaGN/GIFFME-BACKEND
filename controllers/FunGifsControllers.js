require("dotenv").config();

const FunGifs = require('../models/meme');



const getAllFunMemes = async (req, res) => {
  try {
    const fun = await FunGifs.find({tag: "fun"}).sort({ createdAt: -1 });
    res.json({ok:true, fun});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


const createFunMeme = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    const fungif = new FunGifs({ title, imageUrl });
    await fungif.save();
    res.json(fungif);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateFunTitle = async (req, res) => {
  try {
    const funGifId = req.params.id;
    const { title } = req.body;
    const updatedFunGif = await FunGifs.findByIdAndUpdate(funGifId, { title }, { new: true });

    res.json({ success: true, fun: updatedFunGif });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const deleteFunMeme = async (req, res) => {
  try {
    const { id } = req.params;
    await FunGifs.findByIdAndDelete(id);
    res.json({ message: 'Fun Gif deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
    getAllFunMemes,
    createFunMeme,
    deleteFunMeme,
    updateFunTitle
}