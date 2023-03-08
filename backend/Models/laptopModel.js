const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
    cpu: String,
    memory: String,
    screensize: String,
    os: String,
    colour: String,
    ssd: String,
    pricet: Number,
    priced: Number,
    pricec: Number,
    onspecial: Boolean,
    bestvalue: Boolean,
    staffpick: Boolean,
    newarrivals: Boolean,
  },
  { collection: 'laptop' }
);

laptopSchema.statics.findLaptops = async function () {
  const laptops = await this.find();
  return laptops;
};

const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;
