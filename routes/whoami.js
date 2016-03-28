var express = require('express'),
    bodyParser = require('body-parser');

var whoamiRouter = express.Router();
whoamiRouter.use(bodyParser.json());

whoamiRouter.route('/')

.get(function(req, res, next) {
  console.log(req.headers);
  var credentials = {
    "OS": req.headers["user-agent"].split(' ')[8], // Get software from user-agent
    "Browser": req.headers["user-agent"].split(' ')[9], // Get browser
    "Language": req.headers["accept-language"].split(";")[0], // Get first language accepted
    "IP": req.ip
  };
  res.send(credentials);
});

module.exports = whoamiRouter;
