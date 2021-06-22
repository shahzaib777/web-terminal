var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name: String,
  price: String,
  descrip: String
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
