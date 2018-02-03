// Dependencies
import express from "express";

// Posts
import products from './data/products/products.json';

const api = express.Router();

api
  .get('/products', (req, res) => {
    res.status(200).send(products);
    res.end();
  });

export default api;
