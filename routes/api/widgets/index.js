const express = require('express')
const router = express.Router();
const { RssWidget } = require('./../../../Controllers/widgets.js')

/* Rss Widget */

router.get("/rss", RssWidget);

module.exports = router;
