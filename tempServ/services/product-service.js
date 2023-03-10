const pool = require("../config/mysql_config.js");

const getProduct = async (limit) => {
  //   const [rows] = await pool.query(`SELECT * FROM product limit ${limit}`);
  const [rows] = await pool.query(
    `select p.id, p.name, b.name brand, c.name category, created_date, description, sale, price, stock, image from product p inner join brand b on p.brand_id=b.id inner join category c on p.category_id=c.id limit ${limit}`
  );
  console.log(rows);
  return rows;
};

module.exports = getProduct;
