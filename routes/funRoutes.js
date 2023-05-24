const express = require('express');
const { getAllFunMemes, createFunMeme, deleteFunMeme } = require('../controllers/FunGifsControllers');


const FunRouter = express.Router();

FunRouter.get('/', getAllFunMemes);
FunRouter.post('/', createFunMeme);
FunRouter.delete('/:id', deleteFunMeme);

module.exports = FunRouter;