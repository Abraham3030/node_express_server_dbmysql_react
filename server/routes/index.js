const express = require('express');
const router = express.Router();
const db = require('../db/index');


router.get('/', async (req, res, next) => {
    try {
        const users = await db.query('SELECT * FROM employees');
        res.json(users);
    } catch (err) {
        next(err);
    }
});



module.exports = router;