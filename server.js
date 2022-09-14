const express = require('express');
//const routes = require('./controllers');
const sequelize = require('./config/connection');
const mysql = require('mysql2');



const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: '',
      // Your MySQL password
      password: '',
      database: 'scorekeeper'
    },
    console.log('Connected to the scorekeeper database.')
  );

// Select all from score table
//db.query('SELECT * FROM scores', (err, rows) => {
    //console.log(rows);
//});

// Get all scores
app.get('/api/scores', (req, res) => {
    const sql = 'Select * from scores';

    db.query(sql, (err, rows)=> {
        if (err){
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

//Create a new score
app.post('/api/score', ({ body }, res) => {
    const errors = inputCheck(body, 'gametime');
    if (errors) {
        res.status(400).json({ error: errors })
        return
    }
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });