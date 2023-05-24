require("dotenv").config();

const Meme = require('../models/meme');



const getAllMemes = async (req, res) => {
  try {
    const memes = await Meme.find({tag: "meme"}).sort({ createdAt: -1 });
    res.json({ok:true, memes});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateMemeTitle = async (req, res) => {
  try {
    const memeId = req.params.id;
    const { title } = req.body;
    const updatedMeme = await Meme.findByIdAndUpdate(memeId, { title }, { new: true });

    res.json({ success: true, meme: updatedMeme });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const uploadMemeFromUrl = async (req, res) => {
  const {url} = req.body;
  try {
    if (url) {
      const gif = new Meme(req.body);
      await gif.save();

      return res.status(203).json({
        ok: true,
        gif,
      });
    }
  } catch (error) {
    return res
      .status(503)
      .json({ ok: false, msg: "Something bad happened..." });
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
  uploadMemeFromUrl,
  deleteMeme,
  updateMemeTitle
}
