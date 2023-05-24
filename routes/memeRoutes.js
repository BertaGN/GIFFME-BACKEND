const express = require('express');
const { getAllMemes, createMeme, deleteMeme } = require('../controllers/memeController');


const router = express.Router();

router.get('/', getAllMemes);
router.post('/', createMeme);
router.delete('/:id', deleteMeme);

module.exports = router;