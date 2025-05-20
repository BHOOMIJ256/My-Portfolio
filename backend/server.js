const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bvj459', // use your MySQL password if any
  database: 'portfolio'
});

db.connect(err => {
  if (err) console.error('DB error:', err);
  else console.log('MySQL connected');
});

app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  const sql = 'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, subject, message], (err) => {
    if (err) return res.status(500).send('Error saving message');
    res.send('Message saved!');
  });
});

app.listen(3001, () => console.log('Server running on port 3001'));
