const express = require('express');
const { getAllCatMemes, createCatMeme, deleteCatMeme, updateCatsTitle } = require('../controllers/catGifsController');


const CatRouter = express.Router();

CatRouter.get('/', getAllCatMemes);
CatRouter.post('/', createCatMeme);
CatRouter.put('/:id', updateCatsTitle);
CatRouter.delete('/:id', deleteCatMeme);

module.exports = CatRouter;