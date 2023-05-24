const express = require('express');
const { getAllCatMemes, createCatMeme, deleteCatMeme } = require('../controllers/catGifsController');


const CatRouter = express.Router();

CatRouter.get('/', getAllCatMemes);
CatRouter.post('/', createCatMeme);
CatRouter.delete('/:id', deleteCatMeme);

module.exports = CatRouter;