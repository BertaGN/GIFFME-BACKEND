const express = require('express');
const { getAllMemes,  uploadMemeFromUrl, uploadMemeLocal, deleteMeme, updateMemeTitle } = require('../controllers/memeController');


const router = express.Router();

router.get('/', getAllMemes);
router.post('/addfromurl', uploadMemeFromUrl);
router.post('/addlocal', uploadMemeLocal);
router.put('/:id', updateMemeTitle);
router.delete('/:id', deleteMeme);

module.exports = router;