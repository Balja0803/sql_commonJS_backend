const pool = require("../config/mysql_config.js");

const getBrands = async () => {
  const [rows] = await pool.query(`SELECT name FROM brand `);
  return rows;
};

module.exports = getBrands;
