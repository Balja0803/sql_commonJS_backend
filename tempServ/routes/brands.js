const express = require("express");
const getBrands = require("../services/brand-service.js");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("brands GET huselt irlee");

  const result = await getBrands();
  res.status(200).send(result);
});

module.exports = router;
