const express = require('express');
const router = express.Router();
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

// /* POST sms msg. */
router.post('/', function(req, res) {
    client.messages
        .create({from: process.env.FROM, body: req.body.msg, to: req.body.tell})
        .then(message => res.json(message));
});

module.exports = router;
