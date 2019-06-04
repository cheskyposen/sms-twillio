const express = require('express');
const router = express.Router();
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ title: 'Express' });
});

module.exports = router;
