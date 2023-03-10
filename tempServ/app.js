const express = require("express");
const app = express();
const port = 4040;
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const prodRouter = require("./routes/products.js");
const brandRouter = require("./routes/brands.js");
const catRouter = require("./routes/category.js");

app.use(cors());
app.use(bodyParser.json());
app.use("/products", prodRouter);
app.use("/brands", brandRouter);
app.use("/categories", catRouter);

app.listen(port, () => {
  console.log(`temp server running on http://localhost:${port}`);
});
