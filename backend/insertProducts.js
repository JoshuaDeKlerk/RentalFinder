// insertProducts.js
import mongoose from 'mongoose';
import Product from './models/Product.js';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI is not defined');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');
  const products = [
    {
      name: "Tesla Model S",
      year: "2022",
      images: ["https://via.placeholder.com/400"],
      fuel: "Electric",
      seats: "Five Seaters",
      topSpeed: "322 km/h",
      engine: "Electric",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 4500,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "Porsche 911",
      year: "2019",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "310 km/h",
      engine: "3.0-liter H6",
      transmission: "Manual",
      airConditioning: "Yes",
      price: 3800,
      location: "Pretoria",
      category: "Popular"
    },
    {
      name: "Lamborghini Aventador",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "350 km/h",
      engine: "6.5-liter V12",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 5500,
      location: "Pretoria",
      category: "Sports"
    },
    {
      name: "Ford Mustang",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Four Seaters",
      topSpeed: "250 km/h",
      engine: "5.0-liter V8",
      transmission: "Manual",
      airConditioning: "Yes",
      price: 3200,
      location: "Pretoria",
      category: "SUV"
    },
    {
      name: "Audi R8",
      year: "2018",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "330 km/h",
      engine: "5.2-liter V10",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 6000,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "BMW M3",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Four Seaters",
      topSpeed: "290 km/h",
      engine: "3.0-liter I6",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 4500,
      location: "Pretoria",
      category: "Popular"
    },
    {
      name: "Mercedes-Benz G-Class",
      year: "2021",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Five Seaters",
      topSpeed: "210 km/h",
      engine: "4.0-liter V8",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 8000,
      location: "Pretoria",
      category: "SUV"
    },
    {
      name: "Chevrolet Camaro",
      year: "2019",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Four Seaters",
      topSpeed: "250 km/h",
      engine: "6.2-liter V8",
      transmission: "Manual",
      airConditioning: "Yes",
      price: 3200,
      location: "Pretoria",
      category: "Sports"
    },
    {
      name: "Ferrari F8",
      year: "2021",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "340 km/h",
      engine: "3.9-liter V8",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 7500,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "Lexus RX 350",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Five Seaters",
      topSpeed: "200 km/h",
      engine: "3.5-liter V6",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 3500,
      location: "Pretoria",
      category: "SUV"
    },
    {
      name: "Bentley Bentayga",
      year: "2021",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Five Seaters",
      topSpeed: "300 km/h",
      engine: "6.0-liter W12",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 12000,
      location: "Pretoria",
      category: "Popular"
    },
    {
      name: "Nissan GT-R",
      year: "2021",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Four Seaters",
      topSpeed: "330 km/h",
      engine: "3.8-liter V6",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 6500,
      location: "Pretoria",
      category: "Sports"
    },
    {
      name: "Jaguar F-Type",
      year: "2019",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "300 km/h",
      engine: "5.0-liter V8",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 4100,
      location: "Pretoria",
      category: "Popular"
    },
    {
      name: "Bentley Continental GT",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Four Seaters",
      topSpeed: "318 km/h",
      engine: "6.0-liter W12",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 6000,
      location: "Pretoria",
      category: "SUV"
    },
    {
      name: "Aston Martin DB11",
      year: "2019",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Four Seaters",
      topSpeed: "322 km/h",
      engine: "5.2-liter V12",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 5000,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "Rolls-Royce Ghost",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Five Seaters",
      topSpeed: "250 km/h",
      engine: "6.6-liter V12",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 7500,
      location: "Pretoria",
      category: "Popular"
    },
    {
      name: "Bugatti Chiron",
      year: "2021",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "420 km/h",
      engine: "8.0-liter W16",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 12000,
      location: "Pretoria",
      category: "Sports"
    },
    {
      name: "Aston Martin Vantage",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "314 km/h",
      engine: "4.0-liter V8",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 4800,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "Alfa Romeo Giulia",
      year: "2019",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Five Seaters",
      topSpeed: "307 km/h",
      engine: "2.9-liter V6",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 3000,
      location: "Pretoria",
      category: "Popular"
    },
    {
      name: "Maserati Ghibli",
      year: "2019",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Five Seaters",
      topSpeed: "285 km/h",
      engine: "3.0-liter V6",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 3700,
      location: "Pretoria",
      category: "SUV"
    },
    {
      name: "Lexus LC 500",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Four Seaters",
      topSpeed: "270 km/h",
      engine: "5.0-liter V8",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 4200,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "Pagani Huayra",
      year: "2018",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "383 km/h",
      engine: "6.0-liter V12",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 15000,
      location: "Pretoria",
      category: "Sports"
    },
    {
      name: "Koenigsegg Jesko",
      year: "2021",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "482 km/h",
      engine: "5.0-liter V8",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 22000,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "Rimac C_Two",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Electric",
      seats: "Two Seaters",
      topSpeed: "415 km/h",
      engine: "Electric",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 20000,
      location: "Pretoria",
      category: "Sports"
    },
    {
      name: "Lotus Evija",
      year: "2021",
      images: ["https://via.placeholder.com/400"],
      fuel: "Electric",
      seats: "Two Seaters",
      topSpeed: "320 km/h",
      engine: "Electric",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 18000,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "Hennessey Venom F5",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "484 km/h",
      engine: "6.6-liter V8",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 25000,
      location: "Pretoria",
      category: "Sports"
    },
    {
      name: "Rolls-Royce Wraith",
      year: "2019",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Four Seaters",
      topSpeed: "250 km/h",
      engine: "6.6-liter V12",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 8500,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "Maserati GranTurismo",
      year: "2018",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Four Seaters",
      topSpeed: "301 km/h",
      engine: "4.7-liter V8",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 4200,
      location: "Pretoria",
      category: "Popular"
    },
    {
      name: "BMW i8",
      year: "2020",
      images: ["https://via.placeholder.com/400"],
      fuel: "Hybrid",
      seats: "Four Seaters",
      topSpeed: "250 km/h",
      engine: "1.5-liter I3 + Electric",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 4600,
      location: "Pretoria",
      category: "Recommended"
    },
    {
      name: "Lamborghini Huracan",
      year: "2021",
      images: ["https://via.placeholder.com/400"],
      fuel: "Petrol",
      seats: "Two Seaters",
      topSpeed: "325 km/h",
      engine: "5.2-liter V10",
      transmission: "Automatic",
      airConditioning: "Yes",
      price: 7000,
      location: "Pretoria",
      category: "Sports"
    }
  ];

 try {
    const insertedProducts = await Product.insertMany(products);
    console.log('Data inserted:', insertedProducts);
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting products:', err);
    mongoose.connection.close();
  }
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});