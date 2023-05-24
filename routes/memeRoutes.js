const express = require('express');
const { getAllMemes,  uploadMemeFromUrl, deleteMeme, updateMemeTitle } = require('../controllers/memeController');


const router = express.Router();

router.get('/', getAllMemes);
router.post('/addfromurl', uploadMemeFromUrl);
router.put('/:id', updateMemeTitle);
router.delete('/:id', deleteMeme);

module.exports = router;