const express = require('express')
const router = express.Router()

// Forward to index.ejs
router.get('/', function(req, res) {
    res.render('index')
})

module.exports = router