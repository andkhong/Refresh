const token = require('uuid/v1')();

module.exports = {
  generateToken: function(req, res, next){
    req.body.token = token;
    next();
  }
}
