const express = require('express');
const router = express.Router();
const db = require('../db');

// @route   POST api/contact
// @desc    Submit a contact message
// @access  Public
router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    const sql = 'INSERT INTO contactinfo SET ?';
    const post = { name, email, message };

    db.query(sql, post, (err, result) => {
        if (!err) {
            console.log('Message inserted, ID:', result.insertId);
            res.json({ msg: 'Message sent successfully' });
        } else {
            console.error(err.message);
            res.status(500).json({ msg: 'Server Error' });
        }
    });
});

module.exports = router;
