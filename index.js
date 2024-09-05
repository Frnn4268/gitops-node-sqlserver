const express = require('express');
const { sql, poolPromise } = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Users');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server running in port 3000');
});
