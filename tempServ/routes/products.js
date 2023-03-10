const express = require("express");
const getProduct = require("../services/product-service");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("products GET request");
  const { query } = req;
  const result = await getProduct(query.limit || 10);
  res.status(200).send(result);
});

module.exports = router;
