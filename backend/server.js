const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Laptop = require('./Models/laptopModel');

const app = express();
const port = 3001;

const dbName = 'mission5';
const url = `mongodb+srv://kyra:Chy0902@cluster0.mkxui.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Connect to MongoDB using Mongoose
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.get('/api/laptops', async (req, res) => {
  const laptops = await Laptop.findLaptops();
  res.json(laptops);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
