const express = require('express');
const router = express.Router();
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

/* GET messages. */
router.get('/', async function(req, res) {
    let messages = {};
    await client.messages.list({limit: 20})
        .then(results => messages = results);
    res.json(messages);
});

module.exports = router;
