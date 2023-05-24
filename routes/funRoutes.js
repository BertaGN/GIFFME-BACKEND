const express = require('express');
const { getAllFunMemes, createFunMeme, deleteFunMeme, updateFunTitle } = require('../controllers/FunGifsControllers');


const FunRouter = express.Router();

FunRouter.get('/', getAllFunMemes);
FunRouter.post('/', createFunMeme);
FunRouter.put('/:id', updateFunTitle);
FunRouter.delete('/:id', deleteFunMeme);

module.exports = FunRouter;