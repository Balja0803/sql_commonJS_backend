const pool = require("../config/mysql_config.js");

const getCategory = async () => {
  const [rows] = await pool.query(`SELECT name FROM category`);
  return rows;
};

module.exports = getCategory;
