import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  year: String,
  logo: String,
  images: [String],
  fuel: String,
  seats: String,
  topSpeed: String,
  engine: String,
  transmission: String,
  airConditioning: String,
  price: Number,
  location: String, 
  category: String, 
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;









