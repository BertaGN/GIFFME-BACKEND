const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const memeRoutes = require('./routes/memeRoutes');
const seedRouter = require("./routes/SeedRoutes");
const CatRouter = require("./routes/catGifsRoutes");
const userRouter = require("./routes/userRoutes");



const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/meme', memeRoutes);
app.use('/seed', seedRouter);
app.use('/catsgifs', CatRouter);
app.use('/user', userRouter);


module.exports = app;