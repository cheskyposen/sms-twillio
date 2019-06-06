const express = require('express');
const router = express.Router();
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

// /* POST sms msg. */
router.post('/', async function(req, res, next) {
    let response = {};
    await client.messages
        .create({from: process.env.FROM, body: req.body.msg, to: req.body.tell})
        .then(message => response = message);
    res.json(response);
});

module.exports = router;
