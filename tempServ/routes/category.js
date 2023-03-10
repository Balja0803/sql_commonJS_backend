const express = require("express");
const getCategory = require("../services/category-service.js");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("Category Get huselt irlee");
  const result = await getCategory();
  res.status(200).send(result);
});

module.exports = router;
