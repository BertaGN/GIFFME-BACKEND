const express = require('express');
const { getAllMemes, createMeme, deleteMeme, updateMemeTitle } = require('../controllers/memeController');


const router = express.Router();

router.get('/', getAllMemes);
router.post('/', createMeme);
router.put('/:id', updateMemeTitle);
router.delete('/:id', deleteMeme);

module.exports = router;