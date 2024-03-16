const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// MySQL database connection
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'Xaybzc@5533',
    database: 'contacts'
});

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to create a new contact
app.post('/contacts', (req, res) => {
    const { name, email, phoneNumber, jobTitle } = req.body;
    if (!name || !email || !phoneNumber || !jobTitle) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    const query = 'INSERT INTO contacts (name, email, phoneNumber, jobTitle) VALUES (?, ?, ?, ?)';
    pool.query(query, [name, email, phoneNumber, jobTitle], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error creating contact' });
        }
        res.status(201).json({ message: 'Contact created successfully' });
    });
});

// Define other CRUD endpoints for reading, updating, and deleting contacts

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
