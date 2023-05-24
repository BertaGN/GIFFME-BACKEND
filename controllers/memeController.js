require("dotenv").config();

const Meme = require('../models/meme');



const getAllMemes = async (req, res) => {
  try {
    const memes = await Meme.find({}).sort({ createdAt: -1 });
    res.json({ok:true, memes});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


const createMeme = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    const meme = new Meme({ title, imageUrl });
    await meme.save();
    res.json(meme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteMeme = async (req, res) => {
  try {
    const { id } = req.params;
    await Meme.findByIdAndDelete(id);
    res.json({ message: 'Meme deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getAllMemes,
  createMeme,
  deleteMeme
}
