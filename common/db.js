import mysql from "mysql2/promise";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
} from "./constants/environment.js";

// create pool
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function db(sql, params) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(sql, params);
    return result;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  } finally {
    if (connection) connection.release();
  }
}

export default db;
