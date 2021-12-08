const express = require('express')
const router = express.Router();
const {
  RssWidget,
  createWidget,
  getAllWidget,
  deleteWidget
} = require('./../../../Controllers/widgets.js')

/* Rss Widget */

router.get("/rss", RssWidget);
/**
 *  Get all widget by a specific user
 */
router.get('/:userId', getAllWidget);
/**
 *  create a new Widget
 *  {name, userId}
 */
router.post('/', createWidget);
/**
 *  delete a widget
 *  @param id
 */
router.post('/:id', deleteWidget)

module.exports = router;
