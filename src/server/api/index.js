// Dependencies
import express from "express";

// Posts
import tests from './data/tests/tests.json';

const api = express.Router();

api
  .get("/tests", (req, res) => { // Services Posts Example
    res.status(200).json(tests);
    res.end();
  })
  .post("/new_test", (req, res) => { // Create New Services For User
    console.log(`New Test:
      ${req.body}`);
    res.end();
  });

export default api;
