const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'vishnudb'
});

db.connect((err) => {
    if (!err) {
        console.log('Db connected');
        // Auto-create contactinfo table if it doesn't exist
        const createTableSQL = `
            CREATE TABLE IF NOT EXISTS contactinfo (
                id INT AUTO_INCREMENT,
                name VARCHAR(100),
                email VARCHAR(100),
                message TEXT,
                PRIMARY KEY(id)
            )
        `;
        db.query(createTableSQL, (err) => {
            if (!err) {
                console.log('Messages table ready');
            } else {
                console.log('Error creating table:', err);
            }
        });
    } else {
        console.log('Db not connected');
        console.log(err);
    }
});

module.exports = db;
