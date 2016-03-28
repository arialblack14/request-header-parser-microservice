var express = require('express'),
    bodyParser = require('body-parser');

// Require the module which checks the headers
var reqHeader = require('../reqHeader');

var whoamiRouter = express.Router();
whoamiRouter.use(bodyParser.json());

whoamiRouter.route('/')

.get(function(req, res, next) {
  console.log(req.headers);

  var credentials = {
    "OS": reqHeader.os(req.headers),
    "Browser": reqHeader.browser_type(req.headers), // Get browser
    "Language": reqHeader.language(req.headers),
    "IP": req.ip
  };
  res.send(credentials);
});

module.exports = whoamiRouter;
