const express = require('express'),
  heldByRouter = express.Router();

/* This route will only run when the url
 *  controlled by app.js
 */
heldByRouter.route('/').get((req, res) => {
  res.render('held-by-discovery', {});
});

module.exports = heldByRouter;
