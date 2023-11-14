const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    console.log('Absolute file path:', filePath);
    res.sendFile(filePath);
});

module.exports = router;